import React from 'react';
import styled from 'styled-components';

function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text;
}

function toText(node) {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  return tag.innerText;
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

const PostResume = styled.p`
  font-size: 1rem;
  padding: 0 10px;
`;

const PostCard = ({ post }) => (
  <PostLink href={post.guid} target="_blank" rel="noopener noreferrer">
    <CardContainer>
      <PostThumb src={post.thumbnail} />
      <ContentContainer>
        <PostTitle>{shortenText(post.title)}</PostTitle>
        <PostResume>{'...' + shortenText(toText(post.content), 60, 300) + '...'}</PostResume>
      </ContentContainer>
    </CardContainer>
  </PostLink>
);

export default PostCard;