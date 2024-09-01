import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.page";
import SignIn from "./pages/Signin.page";
import React, { Suspense } from "react";
import CreateBlog from "./pages/Create-Blog.page";
import BlogSkeleton from "./components/Blog/Blog-skeleton.component";

const Blogs = React.lazy(() => import("./pages/Blogs.page"));
const IndividualBlog = React.lazy(() => import("./pages/IndividualBlog.page"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<BlogSkeleton />}>
                <Blogs />
              </Suspense>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Suspense fallback={<BlogSkeleton />}>
                <IndividualBlog />
              </Suspense>
            }
          />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
