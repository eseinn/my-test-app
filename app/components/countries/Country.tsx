import type { CountryT } from "@/types"

export const Country = async ({ id }: {
    id: string
}) => {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
    const country: CountryT[] = await data.json()

    return <div>{country[0].name.common}</div>
}