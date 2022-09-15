import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./ViewerModule.css";
import { App } from "@formant/data-sdk";
import { TelemetryUniverseData } from "@formant/universe-connector";
import { definedAndNotNull, SceneBuilder, Universe } from "@formant/universe";

const universeData = new TelemetryUniverseData();

const urlParams = new URLSearchParams(window.location.search);
const deviceId = definedAndNotNull(urlParams.get("device_id"));

let scene = new SceneBuilder(deviceId)
  .addLayer({
    id: "layer1",
    type: "device_visual_tf",
    name: "TF",
    children: [],
    data: [],
    dataSources: [
      {
        id: "fasd",
        sourceType: "telemetry",
        streamName: "tf",
        streamType: "transform tree",
      },
    ],
    visible: true,
    editing: false,
    fieldValues: {},
    position: { type: "manual", x: 0, y: 0, z: 0 },
  })
  .addGround()
  .build();

function ViewerModule() {
  useEffect(() => {
    App.addModuleDataListener((data) => {
      universeData.setTime(new Date(data.time));
    });
  });

  return (
    <div className="App">
      <Universe
        initialSceneGraph={scene}
        universeData={universeData}
        mode="view"
      />
    </div>
  );
}

export default ViewerModule;
