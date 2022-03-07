import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";
import Layout from "./common/layout/layout";
import Finalize from "./modules/finalize/finalize";
import Heading from "./modules/heading/heading";
import Personality from "./modules/personality/personality";
import Recognition from "./modules/recognition/recognition";
import Summary from "./modules/summary/summary";
import Theoretical from "./modules/theoretical/theoretical";
import WorkHistory from "./modules/work-history/workHistory";
import Abilities from "./modules/abilities/abilities";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Heading />} />
          <Route path="work-history" element={<WorkHistory />} />
          <Route path="theoretical" element={<Theoretical />} />
          <Route path="recognition" element={<Recognition />} />
          <Route path="abilities" element={<Abilities />} />
          <Route path="personality" element={<Personality />} />
          <Route path="summary" element={<Summary />} />
          <Route path="finalize" element={<Finalize />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
