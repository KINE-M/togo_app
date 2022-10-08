import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { getPostList, initialState } from '../../redux/postSlice';
import { RootState } from '../../redux/store';
import FeaturedPost from './FeaturedPost';
import samplePostList from '../../sampleData/posts';

type PostsProps = {
  count?: number;
};

const Posts: React.FC<PostsProps> = ({ count }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postList } = useSelector((state: RootState) => state.post || initialState);

  useEffect(() => {
    if (count) {
      dispatch(getPostList(samplePostList.slice(0, count)));
    } else {
      dispatch(getPostList(samplePostList));
    }
  }, [dispatch]);

  if (!postList.length) {
    return (
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          みんなのおすすめスポット
        </Typography>
        <Typography variant="body1">投稿された記事はありません。</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          みんなのおすすめスポット
        </Typography>
        <Grid container spacing={3}>
          {postList.map((post) => (
            <FeaturedPost post={post} key={post.togo.id} />
          ))}
        </Grid>
      </Box>
      {count && (
        <Box sx={{ pb: 1, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => navigate('/posts')}>
            もっとみる
          </Button>
        </Box>
      )}
    </>
  );
};

export default Posts;
