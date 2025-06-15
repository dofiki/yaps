import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import BlogsPage from "../pages/BlogsPage";
import LogInPage from "../pages/LogInPage";
import NotFoundPage from "../pages/NotFoundPage";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/onboarding" element={<LogInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
