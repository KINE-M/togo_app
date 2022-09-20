import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AllPosts from './components/AllPosts';
import Error from './components/Error';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import Login from './components/Login';
import OnePost from './components/OnePost';
import Map from './components/Map';

const App = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:id" element={<OnePost />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Box>
);

export default App;
