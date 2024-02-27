// const isDev = process.env.NODE_ENV === "development"

module.exports = {
    i18n: {
        locales: ['en', 'am'],
        defaultLocale: 'en',
        // debug:isDev,
        // localeDetection:true,
        react: { useSuspense: false },//this line
      }
}