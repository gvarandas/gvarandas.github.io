import React from 'react';

const MEDIUM_API_ADDRESS = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gvarandas';

// function replicate(element, number) {
//   return new Array(number).fill(element[0]);
// }

class PostsContainer extends React.Component {
  state = {
    isLoading: true,
    posts: [],
  };

  componentDidMount() {
    fetch(MEDIUM_API_ADDRESS)
    .then(response => response.json())
    .then(response => {
      const posts = response.items.filter(item => item.categories.length);
      this.setState({
        // posts: replicate(posts, 10),
        posts: posts,
        isLoading: false,
      });
    })
    .catch(error => console.log('error retrieving posts', error));
  }

  render() {
    return this.state.isLoading ?
      this.props.placeholder()
      :
      this.props.children(this.state.posts);
  }
}

export default PostsContainer;