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
import Pdf from './pages/pdf/Pdf';
import Pdf2 from './pages/pdf/Pdf2';

function App() {
  return (
    <Routes>

      {/* <Route element={<PublicRoute />}> */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<List />} />
        <Route path="/community/write" element={<Write />} />
        <Route path="/community/:id" element={<DetailPage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/post" element={<Post />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/pdf2" element={<Pdf2 />} />

      {/* </Route> */}

      <Route element={<PrivateRoute />}>
      </Route>
    </Routes>
  );
}

export default App;
