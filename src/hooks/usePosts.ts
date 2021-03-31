import React from 'react';
import { MediumPost } from '../types';

const MEDIUM_API_ADDRESS =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gvarandas';

export const usePosts = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<MediumPost[]>([]);
  const fetchController = React.useRef(new AbortController());

  React.useEffect(() => {
    const currentController = fetchController.current;
    setIsLoading(true);
    fetch(MEDIUM_API_ADDRESS, { signal: currentController.signal })
      .then((response) => response.json())
      .then((response: { items: MediumPost[] }) => {
        const posts = response.items.filter((item) => item.categories.length);
        setPosts(posts);
        setIsLoading(false);
      })
      .catch((error) => console.log('error retrieving posts:', error));

    return () => currentController.abort();
  }, []);

  return { posts, isLoading };
};
