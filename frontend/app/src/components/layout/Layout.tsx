import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = () => (
  <>
    <Header />
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        pt: { xs: '56px', sm: '64px', md: '70px' },
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default Layout;
