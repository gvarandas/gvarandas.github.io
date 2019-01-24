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
  max-width: 400px;
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
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 380px)  {
    font-size: 1.25rem;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 5px;
`;

const PostBadge = styled.span`
  font-size: 1rem;
  padding: 5px 10px;
  margin: 4px;
  background-color: #eee;
  border-radius: 5px;

  @media (max-width: 380px)  {
    font-size: 0.8rem;
  }
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