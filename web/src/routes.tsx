import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";
import EditOrphanage from './pages/EditOrphanage'
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import OrphanagePending from "./pages/OrphanagePending";
import Success from "./pages/Success";
import Delete from "./pages/Delete";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot" exact component={ForgotPassword} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/success" exact component={Success} />
        <Route path="/delete" exact component={Delete} />
        <Route path="/orphanage-pending" exact component={OrphanagePending} />
        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/edit/:id" exact component={EditOrphanage} />
        <Route path="/orphanages/:id" exact component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
