import React from "react";
import store from "./redux/Store";
import Home from "./component/Home";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
