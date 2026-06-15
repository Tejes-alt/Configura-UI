import { useState } from "react"

import {
  FaPalette,
  FaBell,
  FaLanguage,
  FaMoon,
  FaSun,
  FaSave
} from "react-icons/fa"

function UserPreferences() {

  const [theme, setTheme]
    = useState(

      localStorage.getItem(
        "theme"
      ) === "dark"

      ? "Dark"

      : "Light"
    )

  const [notifications,
    setNotifications]

    = useState(true)

  const [language,
    setLanguage]

    = useState(

      localStorage.getItem(
        "language"
      ) || "English"
    )

  const changeTheme = (
    value
  ) => {

    setTheme(value)

    if(value === "Dark") {

      document.body.classList.add(
        "dark-theme"
      )

      localStorage.setItem(
        "theme",
        "dark"
      )

    } else {

      document.body.classList.remove(
        "dark-theme"
      )

      localStorage.setItem(
        "theme",
        "light"
      )
    }
  }

  const saveLanguage = () => {

    if(language === "English") {

      localStorage.setItem(
        "language",
        "en"
      )
    }

    if(language === "Hindi") {

      localStorage.setItem(
        "language",
        "hi"
      )
    }

    if(language === "Japanese") {

      localStorage.setItem(
        "language",
        "ja"
      )
    }

    alert(
      "Preferences Saved Successfully"
    )
  }

  return (

    <div className="preferences-page">

      <div className="preferences-header">

        <div className="dashboard-badge">

          ⚙️ USER PREFERENCES

        </div>

        <h1>

          Personal Preferences

        </h1>

        <p>

          Customize your workspace,
          appearance, notifications,
          and language settings.

        </p>

      </div>

      <div className="preferences-grid">

        {/* THEME */}

        <div className="preferences-card">

          <div className="pref-title">

            <FaPalette />

            Appearance

          </div>

          <p
            style={{
              marginBottom:"25px",
              color:"#64748b",
              lineHeight:"1.7"
            }}
          >

            Switch between
            light and dark mode.

          </p>

          <div className="theme-toggle">

            <button
              className={
                theme === "Light"

                ? "theme-btn active-theme"

                : "theme-btn"
              }
              onClick={() =>
                changeTheme("Light")
              }
            >

              <FaSun />

              Light

            </button>

            <button
              className={
                theme === "Dark"

                ? "theme-btn active-theme"

                : "theme-btn"
              }
              onClick={() =>
                changeTheme("Dark")
              }
            >

              <FaMoon />

              Dark

            </button>

          </div>

        </div>

        {/* LANGUAGE */}

        <div className="preferences-card">

          <div className="pref-title">

            <FaLanguage />

            Language

          </div>

          <p
            style={{
              marginBottom:"25px",
              color:"#64748b",
              lineHeight:"1.7"
            }}
          >

            Choose your
            preferred language.

          </p>

          <select
            className="pref-select"
            value={language}
            onChange={(e)=>
              setLanguage(
                e.target.value
              )
            }
          >

            <option>
              English
            </option>

            <option>
              Hindi
            </option>

            <option>
              Japanese
            </option>

          </select>

          <button
            className="save-language-btn"
            onClick={saveLanguage}
          >

            <FaSave />

            Save Language

          </button>

        </div>

        {/* NOTIFICATIONS */}

        <div className="preferences-card">

          <div className="pref-title">

            <FaBell />

            Notifications

          </div>

          <p
            style={{
              marginBottom:"25px",
              color:"#64748b",
              lineHeight:"1.7"
            }}
          >

            Enable or disable
            system notifications
            and alerts.

          </p>

          <button
            className="notification-btn"
            onClick={() =>
              setNotifications(
                !notifications
              )
            }
          >

            {

              notifications

              ? "Notifications Enabled"

              : "Notifications Disabled"

            }

          </button>

        </div>

      </div>

    </div>
  )
}

export default UserPreferences