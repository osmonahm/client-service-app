import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import React from "react";
import Iconify from '../components/iconify';
import { BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/posts';
// mock
import POSTS from '../_mock/blog';
import PostsPostCard from "../sections/@dashboard/posts/PostsPostCard";
import PostsPostDialog from "../sections/@dashboard/posts/PostsPostDialog";

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function PostsPage() {
  const [post, setPost] = React.useState(null);
  console.log("Post: ", post)

  const onClick = (post) => {
    setPost(post)
  }

  return (
    <>
      <Helmet>
        <title> Posts </title>
      </Helmet>
      <Container>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
        >
          <Typography
              variant="h4"
              gutterBottom
          >
            Posts
          </Typography>
          <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill"/>}
          >
            New Post
          </Button>
        </Stack>

        <Stack
            mb={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid
            container
            spacing={3}
        >
          {POSTS.map((post, index) => (
            <PostsPostCard
                key={post.id}
                post={post}
                index={index}
                onClick={onClick}
            />
          ))}
        </Grid>
      </Container>
      <PostsPostDialog
          post={post}
      />
    </>
  );
}
