import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, '.', '');
	return {
		// Generate relative asset paths so the built files work when served from a file server or subfolder
		base: './',
		server: {
			port: 3000,
			host: '0.0.0.0',
		},
		plugins: [react()],
		define: {
			'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
			'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
		},
		resolve: {
			alias: {
				'@': path.resolve('.'),
			},
		},
	};
});
