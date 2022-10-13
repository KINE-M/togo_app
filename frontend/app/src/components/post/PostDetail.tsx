import React, { useEffect } from 'react';
import { Box, Chip, Paper, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPostList, initialState } from '../../redux/postSlice';
import { RootState } from '../../redux/store';
import Error from '../Error';
import samplePostList from '../../sampleData/posts';

interface PostDetail {
  togoId: number;
}

const PostDetail: React.FC<PostDetail> = ({ togoId }) => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state: RootState) => state.post || initialState);

  useEffect(() => {
    dispatch(getPostList(samplePostList));
  }, [dispatch]);

  const post = postList.filter((item) => item.togo.id === togoId);

  if (!post.length) {
    return <Error />;
  }

  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.300',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${
            post[0].image ? post[0].image : 'https://source.unsplash.com/random'
          })`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '250px', md: '350px' },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {post[0].title}
      </Typography>
      <Box component="div" sx={{ display: 'inline' }}>
        {post[0].togo.location}
      </Box>
      <Box component="div" sx={{ display: 'inline', ml: 1 }}>
        <Chip label={post[0].togo.tag} variant="outlined" size="small" />
      </Box>
      <Box component="div" sx={{ display: 'flex' }}>
        投稿日：{post[0].publishedAt}
      </Box>
      <Box component="div" sx={{ mt: 2 }}>
        {post[0].description}
      </Box>
    </>
  );
};

export default PostDetail;
