/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'The Costume Box',
  author: 'HallowsEveWrite',
  headerTitle: 'The Costume Box',
  description: 'Stories from Hallows about silly things',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://thecostumebox.net',
  siteRepo: 'https://github.com/hallowsevewrite/hallowsevewrite.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'hallows.eve.write@gmail.com',
  github: 'https://github.com/HallowsEveWrite',
  x: 'https://x.com/HallowsEveWrite',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/profile/hallowsevewrite.bsky.social',
  wattpad: 'https://www.wattpad.com/user/HallowsEveWrite',
  deviantart: 'https://www.deviantart.com/hallowsevewrite',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    //umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      //umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    //},
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-1GGDVGMPJF', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  // comments: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // Select a provider and use the environment variables associated to it
  //   // https://vercel.com/docs/environment-variables
  //   provider: 'disqus', // supported providers: giscus, utterances, disqus
  //   disqus: {
  //     // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  //     shortname: 'thecostumebox',
  //   },
  // },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
