import React from 'react';

export interface Routes {
  /**
   * Path of Route
   * @default undefined
   */
  key: string;

  /**
   * Title of tab
   * @default undefined
   */
  title: string;
}

export interface TopTabChildProps {
  /**
   * Path of Route
   * @default undefined
   */
  route: string;

  /**
   * Title of tab
   * @default undefined
   */
  title: string;

  /**
   * Children for Tab
   * @default undefined
   */
  children?: React.ReactNode;
}

export interface TopTabProps {
  /**
   * A number of the active route in the routes array
   * @default 0
   */
  initIndex: number;

  /**
   * Children for Tab
   * @default undefined
   */
  children?: React.ReactNode;

  /**
   * Event handle to press tab
   * @default undefined
   */
  onTabPress?: () => void;
}
