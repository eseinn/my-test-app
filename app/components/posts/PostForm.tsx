'use client';

import { createPost, PostState } from '@/lib/actions';
import { useActionState } from 'react';

export default function PostForm() {
  const initialState: PostState = { message: null, errors: {} };

  const [state, formAction] = useActionState(createPost, initialState);

  return (
    <div className=''>
      <div>Create new post:</div>
      <form action={formAction} className='flex flex-col gap-2'>
        <input type='text' name='title' className='bg-gray-200 rounded-md' />
        {state?.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
        <input type='text' name='content' className='bg-gray-200 rounded-md' />
        {state?.errors?.content &&
          state.errors.content.map((error: string) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
