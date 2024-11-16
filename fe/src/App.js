import logo from './logo.svg';
import './App.css';
import './index.css'; // Tailwind CSS 파일 import

import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Join from './pages/Join';
import Login from './pages/Login';
import List from './pages/community/List';
import Write from './pages/community/Write';
import DetailPage from "./pages/community/Detail";
import Notice from './pages/Notice';
import Post from './pages/Post';
import Main from './pages/Main';

function App() {
  return (
    <Routes>

      <Route element={<PublicRoute />}>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />   
        
      </Route>

      <Route element={<PrivateRoute />}>     
        <Route path="/" element={<Main />} />     
        <Route path="/notice" element={<Notice />} />
        <Route path="/post" element={<Post />} />  

      <Route element={<PrivateRoute />}>

      </Route>
    </Routes>
  );
}

export default App;
