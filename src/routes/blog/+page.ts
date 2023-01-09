import type { Load } from "@sveltejs/kit"

export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/posts')
    const posts: { meta: { title: string; summary?: string }; path: string }[] = await response.json()

    return {
        posts
    }
}