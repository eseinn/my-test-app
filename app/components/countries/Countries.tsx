import type { CountryT } from '@/types';
import Link from 'next/link';

export const Countries = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all');
    const countries: CountryT[] = await data.json();
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
