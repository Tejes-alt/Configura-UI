import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

import i18n from "../i18n"

const LanguageContext =
  createContext()

export const LanguageProvider = ({
  children
}) => {

  const [language,
    setLanguage]

    = useState(

      localStorage.getItem(
        "language"
      ) || "en"
    )

  useEffect(() => {

    i18n.changeLanguage(
      language
    )

    localStorage.setItem(
      "language",
      language
    )

  }, [language])

  const changeLanguage = (
    lang
  ) => {

    setLanguage(lang)
  }

  return (

    <LanguageContext.Provider
      value={{
        language,
        changeLanguage
      }}
    >

      {children}

    </LanguageContext.Provider>
  )
}

export const useLanguage = () =>
  useContext(LanguageContext)