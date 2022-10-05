import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Paper } from '@mui/material';
import Posts from './post/Posts';
import MyTogoList from './togo/MyTogoList';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <MyTogoList />
      </Paper>
      <Paper sx={{ mt: 2 }}>
        <Posts count={2} />
        <Box sx={{ pb: 1, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => navigate('/posts')}>
            もっとみる
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
