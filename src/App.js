import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./common/Routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
