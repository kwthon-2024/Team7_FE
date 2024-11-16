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

function App() {
  return (
    <Routes>

      {/* <Route element={<PublicRoute />}> */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<List />} />
        <Route path="/community/write" element={<Write />} />
        <Route path="/community/:id" element={<DetailPage />} />
      {/* </Route> */}

      <Route element={<PrivateRoute />}>
      </Route>
    </Routes>
  );
}

export default App;
