import './App.css';
import Post from "./Post";
import Header from "./Header";

import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/home.js";
import Login from "./pages/login.js";
import RegisterPage from "./pages/RegisterPage";

import {UserContextProvider} from "./UserContext";

import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

const dotenv = require('dotenv').config()

function App() {
  return (
    <UserContextProvider>
      <Routes>
          <Route path="/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;