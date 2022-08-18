import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {App} from "./App.js"
/*import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Ventures,
  Posts,
  Post,
} from "./components";*/

/*ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Contact />} />
      <Route path="/ventures" element={<Ventures />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);*/


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();