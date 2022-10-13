import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import PostDetail from './post/PostDetail';

const OnePost = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <PostDetail togoId={Number(id)} />
    </Container>
  );
};

export default OnePost;
