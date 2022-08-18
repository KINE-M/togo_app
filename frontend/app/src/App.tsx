import { Box, CssBaseline, Container } from '@mui/material';
import Header from './components/layout/Header';

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
      <Container maxWidth="lg">ToGo App</Container>
    </Box>
  </Box>
);

export default App;
