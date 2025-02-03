import PostForm from '@/app/components/posts/PostForm';
import { Posts } from '@/app/components/posts/Posts';

const Page = async () => {
  return (
    <div>
      <PostForm />
      <Posts />
    </div>
  );
};
export default Page;
