import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      logo: "logo",
      login: "Login",
      logout: "Logout",
      myprofile: "My Profile",
      settings: "Settings",
      logmein: "Log me in",
      signup: "Sign up",
      rememberme: "Remember me",
      gdpr: "We'll never share your email with anyone else",
      nopassword: "No password provided",
      passwordshort: "Password is too short - should be 8 chars minimum",
      passwordmustcontain: "Password must contain a number.",
      enteryouremail: "Enter your email",
      enteryourpassword: "Enter your password",
      tvshows: "TV Shows",
      movies: "Movies",
      kids: "Kids",
      getmoreinfo: "Get more info",
      addtocart: "Add to cart",
      trending: "Trending",
      similar: "Similar",
    },
  },
  tr: {
    translation: {
      logo: "logotr",
      login: "Giriş Yap",
      logout: "Çıkış",
      myprofile: "Profilim",
      settings: "Ayarlar",
      logmein: "Giriş Yap",
      signup: "Yeni Üyelik",
      rememberme: "Beni hatırla",
      gdpr: "Bilgileriniz asla 3. parti kurum ve/veya kişilerle paylaşılmaz",
      nopassword: "Şifre boş bırakılamaz",
      passwordshort: "Şifre çok kısa - en az 8 karakterden oluşmalı",
      passwordmustcontain: "Şifre en az bir rakam içermeli",
      enteryouremail: "E-Posta adresinizi girin",
      enteryourpassword: "Şifrenizi giriniz",
      tvshows: "Diziler",
      movies: "Filmler",
      kids: "Çocuk",
      getmoreinfo: "Daha fazla bilgi al",
      addtocart: "Sepetime ekle",
      trending: "Popüler",
      similar: "Benzer",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "tr",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
