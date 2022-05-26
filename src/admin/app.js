import favicon from "./extensions/favicon.ico";
import AuthLogo from "./extensions/logo.png";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    menu: {
      logo: AuthLogo,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Log in to your Fishmyspot CMS account",
        "Auth.form.welcome.title": "Welcome to Fishmyspot CMS!",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in Fishmyspot CMS. All saved data will be stored in your database.",
        "app.components.LeftMenu.navbrand.title": "Fishmyspot CMS",
        "app.components.HomePage.welcomeBlock.content":
          "Congrats! You are logged as the first administrator. To discover the powerful features provided by Fishmyspot CMS, we recommend you to create your first Content type!",
        "app.components.HomePage.welcomeBlock.content.again":
          "We hope you are making progress on your project! Feel free to know more about Fishmyspot CMS. We are giving our best to improve the product based on your feedback.",
        "HomePage.welcome.congrats.content":
          "You are logged in as the first administrator. To discover the powerful features provided by Fishmyspot CMS,",
        "Settings.permissions.users.listview.header.subtitle":
          "All the users who have access to the Fishmyspot CMS admin panel",
      },
      // Disable video tutorials
      tutorials: false,
      // Disable notifications about new Strapi releases
      notifications: { release: false },
    },
  },
  bootstrap(app) {
    // console.log(app);
  },
};
