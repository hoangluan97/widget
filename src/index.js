import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ContentBox from "./components/Example/ContentBox";
import RecentBox from "./components/Recent/RecentBox";
import GoogleBox from "./components/Googledrive/GoogleBox";
import Github from "./components/Github/Github";
import Upload from "./components/upload/Upload";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ContentBox />} />
          <Route path="/recent" element={<RecentBox />} />
          <Route path="/google" element={<GoogleBox />} />
          <Route path="/github" element={<Github />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
