import React, { useEffect, useState } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import axios from "axios";
import ReactGa from "react-ga";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Generic from "./components/Generic";
import StartLoader from "./components/StartLoader";

import store from "./redux/store";
import { Provider } from "react-redux";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    ReactGa.initialize("UA-163931581-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
    axios
      .get("/resource123")
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <>
      {loading ? (
        <StartLoader />
      ) : error ? (
        <Error message="The server is sending WA!! Please reattempt " />
      ) : (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/spinner" element={<Spinner/>} />
                <Route path="/:generic_site/*" element={<Generic/>} />
              </Routes>
            </div>
          </BrowserRouter>
        </Provider>
      )}
    </>
  );
};

export default App;
