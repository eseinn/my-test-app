'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";
import { z } from 'zod';


const postSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
})

export async function createPost(state: PostState, formData: FormData) {

    const validatedFields = postSchema.safeParse({
        title: formData.get('title'),
        content: formData.get("content")
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: validatedFields.data.title,
            body: validatedFields.data.content,
        });

        // Update data
        // Revalidate cache
        revalidatePath('/posts')
        return response.data;

    }
    catch (error) {
        console.error('Database Error:', error);

        throw new Error("Error creating user: " + error);
    }




}

export type PostState = {
    errors?: {
        content?: string;
        title?: string;
    };
    message?: string | null;
};
