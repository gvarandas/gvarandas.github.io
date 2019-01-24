import React, { Suspense } from 'react';
import styled from 'styled-components';

const PostsContainer = React.lazy(() => import('../containers/PostsContainer'));
const PostCard = React.lazy(() => import('../components/PostCard'));


const PostsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
  flex: 1;

  @media (max-width: 380px)  {
    margin: 5px;
  }
`;

const PostsTitle = styled.h1`
  text-align: center;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlaceholderCard = styled.div`
  width: 300px;
  height: 350px;
  background: rgba(188, 188, 188, 0.5);
  opacity: 0.4;
  border-radius: 5px;
  margin: 20px 5px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
`;

const PostsPlaceholder = () => (
  <>
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
  </>
);

const Posts = () => (
  <PostsFrame>
    <PostsTitle>BLOG POSTS</PostsTitle>
      <PostList>
        <Suspense fallback={<div>Loading...</div>} maxDuration={1000}>
          <PostsContainer placeholder={PostsPlaceholder}>
            {posts => posts.map(post => <PostCard key={post.guid} post={post} />)}
          </PostsContainer>
        </Suspense>
      </PostList>
  </PostsFrame>
);

export default Posts;