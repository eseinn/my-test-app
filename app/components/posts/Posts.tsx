import { fetchPosts } from '@/app/lib/data/data';
import type { PostT } from '@/app/lib/types';

export const Posts = async () => {
  const data = await fetchPosts();
  const posts = (await data.json()) as PostT[];
  console.log(posts);
  return (
    <div>
      <div className='font-bold text-xl text-center'>Posts:</div>
      {posts.map(({ title, body }, index) => {
        return (
          <div className='my-4' key={index}>
            <div className='font-bold text-lg'>{title}</div>
            <div className='text-sm'>{body}</div>
          </div>
        );
      })}
    </div>
  );
};
