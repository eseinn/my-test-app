'use client';

import { createPost, PostState } from '@/lib/actions';
import { useActionState } from 'react';

export default function PostForm() {
  const initialState: PostState = { message: null, errors: {} };

  const [state, formAction] = useActionState(createPost, initialState);

  return (
    <div className='w-[200px] m-auto pb-10'>
      <div className='text-center text-lg'>Create new post:</div>
      <form action={formAction} className='flex flex-col gap-2'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          className='border-gray-500 border bg-gray-200 rounded-md'
        />
        {state?.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
        <label htmlFor='content'>Content</label>

        <input
          type='text'
          name='content'
          className='border-gray-500 border bg-gray-200 rounded-md'
        />
        {state?.errors?.content &&
          state.errors.content.map((error: string) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          Submit
        </button>
      </form>
    </div>
  );
}
