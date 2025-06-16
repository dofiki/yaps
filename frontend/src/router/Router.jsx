import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import BlogsPage from "../pages/BlogsPage";
import LogInPage from "../pages/LogInPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layout/MainLayout";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/create" element={
          <MainLayout>
            <CreatePage />
          </MainLayout>} />
        <Route path="/blogs" element={
          <MainLayout>
            <BlogsPage />
          </MainLayout>
        } />
        <Route path="/onboarding" element={
          <MainLayout>
            <LogInPage />
          </MainLayout>
        } />
        <Route path="*" element={<MainLayout>
          <NotFoundPage />
        </MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
