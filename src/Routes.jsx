import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const FrameFive = React.lazy(() => import("pages/FrameFive"));
const FrameSix = React.lazy(() => import("pages/FrameSix"));
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/framethree" element={<FrameThree />} />
          <Route path="/framesix" element={<FrameSix />} />
          <Route path="/framefive" element={<FrameFive />} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
