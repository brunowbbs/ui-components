import { PropsWithChildren } from 'react';
import { PopoverProfileProps } from './components/popover-profile/types';

export type DropdownSelect = { group: null | number; itemGroup: null | number };

type MenuItem = {
  group_name: string;
  items: {
    icon: React.ReactElement;
    title: string;
    action: () => void;

    dropdown?: {
      title: string;
      action: () => void;
    }[];
  }[];
};

export type DashboardLayoutType = PropsWithChildren & {
  startSidebarOpened?: boolean;
  menuItems: MenuItem[];
  popoverProfile: PopoverProfileProps;
};
