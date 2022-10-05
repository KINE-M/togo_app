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
import type { Post } from '../../types/post';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => (
  <Grid item xs={12} md={6}>
    {post.togo.id !== undefined && (
      <CardActionArea component="a" href={`/posts/${post.togo.id}`}>
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
            <Typography variant="inherit" paragraph sx={{ height: 50, overflow: 'hidden', mt: 3 }}>
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
    )}
  </Grid>
);

export default FeaturedPost;
