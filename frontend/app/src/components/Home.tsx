import { Container, Paper } from '@mui/material';
import MyTogoList from './togo/MyTogoList';
import Posts from './post/Posts';

const Home = () => (
  <Container maxWidth="lg" sx={{ pt: 2 }}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <MyTogoList />
    </Paper>
    <Paper sx={{ mt: 2 }}>
      <Posts count={2} />
    </Paper>
  </Container>
);

export default Home;
