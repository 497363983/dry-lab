import DefaultTheme from "vitepress/theme";
import customLayout from "./customLayout.vue";
import 'katex/dist/katex.min.css'
export default {
    ...DefaultTheme,
    Layout: customLayout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
    }
}