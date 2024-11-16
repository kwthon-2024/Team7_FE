import logo from './logo.svg';
import './App.css';
import './index.css'; // Tailwind CSS 파일 import

import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Join from './pages/Join';
import Login from './pages/Login';
import Notice from './pages/Notice';
import Post from './pages/Post';

function App() {
  return (
    <Routes>

      {/* <Route element={<PublicRoute />}> */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/post" element={<Post />} />
        
      {/* </Route> */}

      <Route element={<PrivateRoute />}>            
      </Route>
    </Routes>
  );
}

export default App;
