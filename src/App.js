import './App.css';
import Post from "./Post";
import Header from "./Header";

import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/home";
import Login from "./pages/login"
import Register from "./pages/register";
import Create from "./pages/create_post";
import PostPage from "./pages/post_page";
import Edit from "./pages/edit_post";

import {UserContextProvider} from "./UserContext";


function App() {
  return(
    <UserContextProvider>
      <Routes>
        
          <Route path="/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;