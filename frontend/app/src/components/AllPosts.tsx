import { Container, Paper } from '@mui/material';
import Posts from './post/Posts';

const AllPosts = () => (
  <Container maxWidth="lg" sx={{ pt: 2 }}>
    <Paper sx={{ mt: 2 }}>
      <Posts />
    </Paper>
  </Container>
);

export default AllPosts;
