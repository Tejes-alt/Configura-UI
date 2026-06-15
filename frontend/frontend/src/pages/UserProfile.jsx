import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaCalendar
} from "react-icons/fa"

function UserProfile() {

  const username =
    localStorage.getItem("username")

  const role =
    localStorage.getItem("role")

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">

          {username?.charAt(0)}

        </div>

        <h1>
          {username}
        </h1>

        <p>
          Enterprise User Profile
        </p>

        <div className="profile-info">

          <div className="profile-item">

            <FaUser />

            <span>
              {username}
            </span>

          </div>

          <div className="profile-item">

            <FaEnvelope />

            <span>
              Logged In User
            </span>

          </div>

          <div className="profile-item">

            <FaShieldAlt />

            <span>
              {role}
            </span>

          </div>

          <div className="profile-item">

            <FaCalendar />

            <span>
              Active Member
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default UserProfile