import React from "react";
import ReactDOM from "react-dom/client";
import ViewerModule from "./ViewerModule";
import "./index.css";
import { Authentication } from "@formant/data-sdk";

(async () => {
  await Authentication.waitTilAuthenticated();
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ViewerModule />
  );
})();
