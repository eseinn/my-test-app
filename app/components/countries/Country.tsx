import { fetchCountry } from '@/app/lib/data/data';
import type { CountryT } from '@/app/lib/types';

export const Country = async ({ id }: { id: string }) => {
  const data = await fetchCountry(id);
  const country: CountryT[] = await data.json();

  return <div>{country[0].name.common}</div>;
};
