import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import { getPostList, initialState } from '../../redux/postSlice';
import { RootState } from '../../redux/store';
import FeaturedPost from './FeaturedPost';
import samplePostList from '../../sampleData/posts';

type PostsProps = {
  count?: number;
};

const Posts: React.FC<PostsProps> = ({ count }) => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state: RootState) => state.post || initialState);

  useEffect(() => {
    if (count) {
      dispatch(getPostList(samplePostList.slice(0, count)));
    } else {
      dispatch(getPostList(samplePostList));
    }
  }, [dispatch]);

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
      <Grid container spacing={3}>
        {postList && postList.map((post) => <FeaturedPost post={post} key={post.togo.id} />)}
      </Grid>
    </Box>
  );
};

export default Posts;
