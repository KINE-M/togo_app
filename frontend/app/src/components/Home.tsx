import { Container, Paper } from '@mui/material';
import MyTogoList from './togo/MyTogoList';

const Home = () => (
  <Container maxWidth="lg">
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <MyTogoList />
    </Paper>
  </Container>
);

export default Home;
