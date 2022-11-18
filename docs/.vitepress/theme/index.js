import DefaultTheme from "vitepress/theme";
import customLayout from "./customLayout.vue";

export default {
    ...DefaultTheme,
    Layout: customLayout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
    }
}