import {
  FaSearch,
  FaEye,
  FaUserShield
} from "react-icons/fa"

function UserDashboard() {

  return (

    <div>

      <div className="dashboard-hero">

        <div className="dashboard-badge">

          👤 User Access Panel

        </div>

        <h1>

          Welcome User

        </h1>

        <p>

          You currently have limited access.
          You can search and view settings
          configurations but cannot modify
          system settings.

        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card blue-card">

          <div>

            <p>
              Access Level
            </p>

            <h2>
              USER
            </h2>

          </div>

          <span>
            👤
          </span>

        </div>

        <div className="stat-card green-card">

          <div>

            <p>
              Permissions
            </p>

            <h2>
              Limited
            </h2>

          </div>

          <span>
            🔒
          </span>

        </div>

        <div className="stat-card purple-card">

          <div>

            <p>
              Search Access
            </p>

            <h2>
              Enabled
            </h2>

          </div>

          <span>
            🔍
          </span>

        </div>

      </div>

      <div className="bottom-grid">

        <div className="recent-card">

          <div className="section-title">

            Available Features

          </div>

          <div className="recent-item">

            <div>

              <h4>
                Search Settings
              </h4>

              <p>
                Access semantic search
              </p>

            </div>

            <FaSearch />

          </div>

          <div className="recent-item">

            <div>

              <h4>
                View Configurations
              </h4>

              <p>
                Read-only settings access
              </p>

            </div>

            <FaEye />

          </div>

          <div className="recent-item">

            <div>

              <h4>
                Secure Access
              </h4>

              <p>
                Role protected account
              </p>

            </div>

            <FaUserShield />

          </div>

        </div>

      </div>

    </div>
  )
}

export default UserDashboard