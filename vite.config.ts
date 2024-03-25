import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});

// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		rollupOptions: {
// 			input: {
// 				main: resolve(__dirname, "index.html"),
// 				nested: resolve(__dirname, "createContact/index.html"),
// 			},
// 		},
// 	},
// });
