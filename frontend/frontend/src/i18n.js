import i18n from "i18next"

import {
  initReactI18next
} from "react-i18next"

const resources = {

  en: {

    translation: {

      dashboard:"Dashboard",

      settings:"Settings",

      search:"Search",

      profile:"Profile",

      preferences:"Preferences",

      favorites:"Favorites",

      activity:"Activity",

      login:"Login",

      register:"Register",

      logout:"Logout",

      welcome:"Welcome Back",

      smartConfig:
        "Smart Configuration Platform"
    }
  },

  hi: {

    translation: {

      dashboard:"डैशबोर्ड",

      settings:"सेटिंग्स",

      search:"खोज",

      profile:"प्रोफ़ाइल",

      preferences:"प्राथमिकताएँ",

      favorites:"पसंदीदा",

      activity:"गतिविधि",

      login:"लॉगिन",

      register:"रजिस्टर",

      logout:"लॉगआउट",

      welcome:"स्वागत है",

      smartConfig:
        "स्मार्ट कॉन्फ़िगरेशन प्लेटफ़ॉर्म"
    }
  },

  ja: {

    translation: {

      dashboard:"ダッシュボード",

      settings:"設定",

      search:"検索",

      profile:"プロフィール",

      preferences:"設定",

      favorites:"お気に入り",

      activity:"アクティビティ",

      login:"ログイン",

      register:"登録",

      logout:"ログアウト",

      welcome:"おかえりなさい",

      smartConfig:
        "スマート設定プラットフォーム"
    }
  }
}

i18n.use(
  initReactI18next
).init({

  resources,

  lng:
    localStorage.getItem(
      "language"
    ) || "en",

  interpolation:{
    escapeValue:false
  }
})

export default i18n