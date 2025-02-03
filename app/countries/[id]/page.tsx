import { Country } from '@/app/components/countries/Country';
import { Suspense } from 'react';

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  return (
    <div>
      <div>You have chosen the country...</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Country id={id} />
      </Suspense>
    </div>
  );
};
export default Page;
