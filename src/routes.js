import React, { lazy } from "react";

//components
import Dashboard from "@material-ui/icons/Dashboard";

//icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AudiotrackOutlinedIcon from "@material-ui/icons/AudiotrackOutlined";

const Tracks = React.lazy(() => import("./views/Tracks/index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "home", component: Dashboard, icon: HomeOutlinedIcon },
  { path: "/tracks", name: "tracks", component: Tracks, icon: AudiotrackOutlinedIcon },
];

export default routes;
