import { useState } from "react"

import {
  useNavigate,
  Link
} from "react-router-dom"

import {
  FaUser,
  FaUserShield
} from "react-icons/fa"

import API from "../api"

function LoginPage() {

  const navigate = useNavigate()

  const [email, setEmail]
    = useState("")

  const [password, setPassword]
    = useState("")

  const [selectedRole,
    setSelectedRole]
      = useState("USER")

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password
          }
        )

      if(
        response.data.token &&
        response.data.token !== "invalid"
      ) {

        if(
          response.data.role
          !== selectedRole
        ) {

          alert(
            "Incorrect role selected"
          )

          return
        }

        localStorage.setItem(
          "token",
          response.data.token
        )

        localStorage.setItem(
          "role",
          response.data.role
        )

        localStorage.setItem(
  "username",
  response.data.username
)

        if(
          response.data.role
          === "ADMIN"
        ) {

          navigate("/dashboard")

        } else {

          navigate("/user-dashboard")
        }

      } else {

        alert(
          "Wrong Credentials"
        )
      }

    } catch(error) {

      alert(
        "Wrong Credentials"
      )
    }
  }

  return (

    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-overlay">

          <div className="brand-badge">
            ⚡ Smart Configuration Platform
          </div>

          <h1>
            Manage Every Setting
            <br />
            Intelligently
          </h1>

          <p>
            Enterprise-grade settings,
            semantic search, secure
            configuration management,
            and intelligent control —
            all in one place.
          </p>

          <div className="auth-features">

            <div>
              ✓ Smart Search
            </div>

            <div>
              ✓ Secure Configurations
            </div>

            <div>
              ✓ Real-Time Settings
            </div>

            <div>
              ✓ Cloud Integration
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <div className="auth-logo">

            Configura

          </div>

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to continue
          </p>

          <div className="role-toggle">

            <button
              type="button"
              className={
                selectedRole === "USER"

                ? "role-btn active-user"

                : "role-btn"
              }
              onClick={() =>
                setSelectedRole("USER")
              }
            >

              <FaUser />

              USER

            </button>

            <button
              type="button"
              className={
                selectedRole === "ADMIN"

                ? "role-btn active-admin"

                : "role-btn"
              }
              onClick={() =>
                setSelectedRole("ADMIN")
              }
            >

              <FaUserShield />

              ADMIN

            </button>

          </div>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">

              Login

            </button>

          </form>

          <span>

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </span>

        </div>

      </div>

    </div>
  )
}

export default LoginPage