export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

export const fetchCountry = (id: string) => fetch(`https://restcountries.com/v3.1/alpha/${id}`)

export const fetchPosts = () => fetch("https://jsonplaceholder.typicode.com/posts")