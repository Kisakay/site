import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  vite: {
    plugins: [svgLoader()],
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      htmlAttrs: { lang: "fr" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#07111f" },
      ],
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('qxchat-theme');if(!t||(t!=='dark'&&t!=='light')){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          type: "text/javascript",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/app-icon.svg" },
        { rel: "icon", type: "image/png", sizes: "128x128", href: "/128x128.png" },
        { rel: "apple-touch-icon", sizes: "128x128", href: "/128x128.png" },
      ],
    },
  },

  nitro: {
    prerender: {
      ignore: ["/app"],
    },
  },
});
