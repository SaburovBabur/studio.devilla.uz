module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/@assets/@img/devilla.png",
      },
    },
  ],
};
