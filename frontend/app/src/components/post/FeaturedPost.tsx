import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../../types/post';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea onClick={() => navigate(`/posts/${Number(post.togo.id)}`)}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h5" variant="h5" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              {post.title}
            </Typography>
            <Box component="div" sx={{ display: 'inline' }}>
              {post.togo.location}
            </Box>
            <Box component="div" sx={{ display: 'inline', ml: 1 }}>
              <Chip label={post.togo.tag} variant="outlined" size="small" />
            </Box>
            <Box component="div" sx={{ display: 'flex' }}>
              投稿日：{post.publishedAt}
            </Box>
            <Typography variant="inherit" paragraph sx={{ height: 40, overflow: 'hidden', mt: 2 }}>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPost;
