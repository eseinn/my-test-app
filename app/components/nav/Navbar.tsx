import type { PropsWithChildren } from 'react';

export const Navbar = ({ children }: PropsWithChildren) => {
  return (
    <div className='sticky top-0 h-full text-center flex-col mr-4 flex gap-4 p-4 bg-blue-400'>
      {children}
    </div>
  );
};
