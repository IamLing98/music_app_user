import React, { lazy } from "react";

import Dashboard from "@material-ui/icons/Dashboard";
const Tracks = React.lazy(() => import("./views/Tracks/index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/tracks", name: "Tracks", component: Tracks },
];

export default routes;
