import type { Load } from "@sveltejs/kit"

export const load: Load = async ({ params }) => {
    const post = await import(`../${params.slug}.md`)
    const content = post.default
    const { title } = post.metadata
    return {
        content,
        title
    }
}