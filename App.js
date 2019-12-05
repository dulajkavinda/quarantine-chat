import React from "react";

import SwitchNavigator from "./navigation/SwitchNavigator";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}
``;
