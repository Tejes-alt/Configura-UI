import { useState } from "react"

import {
  useNavigate,
  Link
} from "react-router-dom"

import API from "../api"

function RegisterPage() {

  const navigate = useNavigate()

  const [username, setUsername]
    = useState("")

  const [email, setEmail]
    = useState("")

  const [password, setPassword]
    = useState("")

  const [role, setRole]
    = useState("USER")

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        "/auth/register",
        {
          username,
          email,
          password,
          role
        }
      )

      alert(
        "Registration Successful"
      )

      navigate("/login")

    } catch(error) {

      alert(
        "Registration Failed"
      )
    }
  }

  return (

    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-overlay">

          <div className="brand-badge">
            🚀 Enterprise Configuration Platform
          </div>

          <h1>
            Build Powerful
            <br />
            Smart Systems
          </h1>

          <p>
            Join Configura and unlock
            intelligent settings management,
            semantic configuration search,
            cloud-ready infrastructure,
            and enterprise-grade control.
          </p>

          <div className="auth-features">

            <div>
              ✓ AI Search Engine
            </div>

            <div>
              ✓ Secure Architecture
            </div>

            <div>
              ✓ Cloud Ready
            </div>

            <div>
              ✓ Real-Time Control
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
            Create Account
          </h1>

          <p>
            Join the smart configuration ecosystem
          </p>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

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

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="role-select"
            >

              <option value="USER">

                USER

              </option>

              <option value="ADMIN">

                ADMIN

              </option>

            </select>

            <button type="submit">

              Create Account

            </button>

          </form>

          <span>

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </span>

        </div>

      </div>

    </div>
  )
}

export default RegisterPage