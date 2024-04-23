import { useRef } from "react";

import {
  AriaTabListOptions,
  AriaTabPanelProps,
  AriaTabProps,
  useTab,
  useTabList,
  useTabPanel,
} from "react-aria";
import { Item, Node, useTabListState } from "react-stately";

import { TabListState, TabListStateOptions } from "@react-stately/tabs";
import "./styles.css";
import { TabProps } from "./types";

function Tab({
  item,
  state,
}: AriaTabProps & { state: TabListState<unknown>; item: Node<object> }) {
  const { key, rendered } = item;
  const ref = useRef(null);
  const { tabProps } = useTab({ key }, state, ref);

  return (
    <div {...tabProps} ref={ref}>
      {rendered}
    </div>
  );
}

function TabPanel({
  state,
  ...props
}: AriaTabPanelProps & { state: TabListState<unknown> }) {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

export function TabsBase(
  props: TabListStateOptions<object> & AriaTabListOptions<object>
) {
  const state = useTabListState(props);
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, state, ref);

  return (
    <div className={`tabs ${props.orientation || ""}`}>
      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>

      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

export function Tabs({ tabs }: TabProps) {
  return (
    <TabsBase>
      {tabs.map(({ content, title }) => (
        <Item key={title} title={title}>
          {content}
        </Item>
      ))}
    </TabsBase>
  );
}
