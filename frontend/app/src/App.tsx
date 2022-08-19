import { Box, CssBaseline } from '@mui/material';
import Header from './components/layout/Header';
import Home from './components/Home';

const App = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Header />
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        pt: { xs: 9, sm: 11, md: 12 },
      }}
    >
      <Home />
    </Box>
  </Box>
);

export default App;
