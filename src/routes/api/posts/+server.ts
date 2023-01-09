import { json } from "@sveltejs/kit"

export const GET = async () => {
    const postFiles = import.meta.glob('/src/routes/blog/*.md')
    const posts = await Promise.all(
        Object.entries(postFiles).map(async ([path, resolver]: [string, any]) => {
            const { metadata } = await resolver()
            // '/src/routes'.length = 11
            const postPath = path.slice(11, -3)
            return {
                meta: metadata,
                path: postPath
            }
        })
    )
    return json(posts)
}