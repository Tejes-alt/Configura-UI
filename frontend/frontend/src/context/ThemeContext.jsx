import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const ThemeContext =
  createContext()

export const ThemeProvider = ({
  children
}) => {

  const [theme, setTheme]
    = useState(

      localStorage.getItem("theme")
      || "dark"
    )

  useEffect(() => {

    document.body.className = ""

    document.body.classList.add(
      `${theme}-theme`
    )

    localStorage.setItem(
      "theme",
      theme
    )

  }, [theme])

  const toggleTheme = (
    newTheme
  ) => {

    setTheme(newTheme)
  }

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>
  )
}

export const useTheme = () =>
  useContext(ThemeContext)