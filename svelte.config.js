import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { mdsvex } from 'mdsvex'
import rehypeImgSize from 'rehype-img-size'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [[rehypeImgSize, { dir: 'static/blog' }]]
		})],

	kit: {
		adapter: adapter(),
		alias: {
			$src: resolve('./src'),
			$lib: resolve('./src/lib')
		}
	},
	extensions: ['.svelte', '.md'],
};

export default config;
