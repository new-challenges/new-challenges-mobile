import * as React from 'react';

class NavigationActionsClass {
  private navigationRef: any;

  constructor() {
    this.navigationRef = React.createRef();
  }

  setNavigation(navigation: any) {
    this.navigationRef = navigation;
  }
  navigate(name: string, params?: any) {
    this.navigationRef.navigate(name, params);
  }
  goBack() {
    this.navigationRef.goBack();
  }
  pop() {
    this.navigationRef.pop();
  }
  reset(index: number, name: string, params: any) {
    this.navigationRef.reset({
      index: index,
      routes: [{name: name, params: params}],
    });
  }
  dispatch(action: any) {
    this.navigationRef.dispatch(action);
  }
}
const navigationActions = new NavigationActionsClass();
export default navigationActions;
