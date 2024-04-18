import { ReactElement } from 'react';

export type TabProps = {
  tabs: {
    title: string;
    content: ReactElement;
  }[];
};
