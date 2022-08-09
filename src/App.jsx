import "./App.css";
import React from "react";
import Store from "./components/Store.jsx";

function App(props) {
  const { products } = props;
  return <Store products={products} />;
}

export default App;
