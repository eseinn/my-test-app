'use client';
import { fetchCountries } from '@/app/lib/data/data';
import type { CountryT } from '@/app/lib/types';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const Countries = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
  const countries: CountryT[] = data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {countries.map((country) => (
        <Link key={country.name.common} href={`/countries/${country.cca2}`}>
          <li>{country.name.common}</li>
        </Link>
      ))}
    </ul>
  );
};
