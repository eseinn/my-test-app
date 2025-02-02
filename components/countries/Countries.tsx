import type { Country } from "@/app/types"

export const Countries = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all')
    const countries: Country[] = await data.json()
    return <ul>
        {countries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
        ))}
    </ul>
}