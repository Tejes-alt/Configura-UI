import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import SettingsPage from "./pages/SettingsPage"
import SearchPage from "./pages/SearchPage"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

import UserDashboard from "./pages/UserDashboard"

import UserProfile from "./pages/UserProfile"
import UserPreferences from "./pages/UserPreferences"
import FavoritesPage from "./pages/FavoritesPage"
import ActivityPage from "./pages/ActivityPage"

import AdminAnalytics from "./pages/AdminAnalytics"
import AdminUsers from "./pages/AdminUsers"
import SystemMonitor from "./pages/SystemMonitor"

import "./styles/app.css"

function Navbar() {

  const navigate = useNavigate()

  const location = useLocation()

  const token =
    localStorage.getItem("token")

  const role =
    localStorage.getItem("role")

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    )

    localStorage.removeItem(
      "role"
    )

    navigate("/login")
  }

  return (

    <nav className="navbar">

      <div className="logo">

        Configura

      </div>

      <div className="nav-links">

        {

          token ? (

            <>

              {

                role === "ADMIN"

                ? (

                  <>

                    <Link to="/dashboard">

                      Dashboard

                    </Link>

                    <Link to="/settings">

                      Settings

                    </Link>

                    <Link to="/search">

                      Search

                    </Link>

                    <Link to="/admin-analytics">

                      Analytics

                    </Link>

                    <Link to="/admin-users">

                      Users

                    </Link>

                    <Link to="/system-monitor">

                      Monitor

                    </Link>

                  </>

                )

                : (

                  <>

                    <Link to="/user-dashboard">

                      Dashboard

                    </Link>

                    <Link to="/search">

                      Search

                    </Link>

                    <Link to="/profile">

                      Profile

                    </Link>

                    <Link to="/preferences">

                      Preferences

                    </Link>

                    <Link to="/favorites">

                      Favorites

                    </Link>

                    <Link to="/activity">

                      Activity

                    </Link>

                  </>

                )
              }

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                Logout

              </button>

            </>

          ) : (

            <>

              {

                location.pathname === "/login" ||
                location.pathname === "/"

                ? (

                  <Link to="/register">

                    Register

                  </Link>

                )

                : (

                  <Link to="/login">

                    Login

                  </Link>

                )
              }

            </>

          )
        }

      </div>

    </nav>
  )
}

function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Navbar />

        <div className="page-content">

          <Routes>

            {/* AUTH */}

            <Route
              path="/"
              element={<LoginPage />}
            />

            <Route
              path="/login"
              element={<LoginPage />}
            />

            <Route
              path="/register"
              element={<RegisterPage />}
            />

            {/* ADMIN */}

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/settings"
              element={<SettingsPage />}
            />

            <Route
              path="/search"
              element={<SearchPage />}
            />

            <Route
              path="/admin-analytics"
              element={<AdminAnalytics />}
            />

            <Route
              path="/admin-users"
              element={<AdminUsers />}
            />

            <Route
              path="/system-monitor"
              element={<SystemMonitor />}
            />

            {/* USER */}

            <Route
              path="/user-dashboard"
              element={<UserDashboard />}
            />

            <Route
              path="/profile"
              element={<UserProfile />}
            />

            <Route
              path="/preferences"
              element={<UserPreferences />}
            />

            <Route
              path="/favorites"
              element={<FavoritesPage />}
            />

            <Route
              path="/activity"
              element={<ActivityPage />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App