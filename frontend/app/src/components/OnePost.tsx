import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';

const OnePost = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      One Post {id}
    </Container>
  );
};

export default OnePost;
