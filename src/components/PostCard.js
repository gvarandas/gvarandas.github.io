import React from 'react';
import styled from 'styled-components';

function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text;
}

const PostLink = styled.a`
  color: black;
  text-decoration: none;
`;

const CardContainer = styled.article`
  max-width: 300px;
  max-height: 400px;
  text-align: center;
  margin: 20px 5px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
`;

const PostThumb = styled.img`
  width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  padding: 10px 5px 5px 5px;
`;

const PostTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 5px;
`;

const PostBadge = styled.span`
  font-size: 0.5rem;
  font-weight: bold;
  padding: 5px;
  margin: 4px 2px;
  background-color: #eee;
  border-radius: 5px;
`;

const PostCard = ({ post }) => {
  const shortPostTitle = shortenText(post.title);
  return (
    <PostLink href={post.guid} target="_blank" rel="noopener noreferrer">
      <CardContainer>
        <PostThumb src={post.thumbnail} alt={`${shortPostTitle} thumbnail`} />
        <ContentContainer>
          <PostTitle>{shortPostTitle}</PostTitle>
          <CategoriesContainer>
            {post.categories.map(category => <PostBadge key={category}>{category}</PostBadge>)}
          </CategoriesContainer>
        </ContentContainer>
      </CardContainer>
    </PostLink>
  );
}

export default PostCard;