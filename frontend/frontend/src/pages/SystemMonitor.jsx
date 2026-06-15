import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaCheckCircle,
  FaMicrochip,
  FaMemory,
  FaWifi,
  FaShieldAlt,
  FaCodeBranch,
  FaClock
} from "react-icons/fa"

function SystemMonitor() {

  return (

    <div className="dashboard-page">

      <div className="dashboard-hero">

        <div className="dashboard-badge">

          🖥️ SYSTEM MONITOR

        </div>

        <h1>

          Infrastructure Status

        </h1>

        <p>

          Monitor APIs, databases,
          cloud infrastructure,
          server health,
          and enterprise services
          in real time.

        </p>

      </div>

      {/* TOP STATS */}

      <div className="stats-grid">

        <div className="stat-card green-card">

          <div>

            <p>Spring Boot</p>

            <h2>ONLINE</h2>

          </div>

          <span>

            <FaServer />

          </span>

        </div>

        <div className="stat-card blue-card">

          <div>

            <p>PostgreSQL</p>

            <h2>ACTIVE</h2>

          </div>

          <span>

            <FaDatabase />

          </span>

        </div>

        <div className="stat-card purple-card">

          <div>

            <p>FastAPI Gateway</p>

            <h2>SYNCED</h2>

          </div>

          <span>

            <FaCloud />

          </span>

        </div>

        <div className="stat-card orange-card">

          <div>

            <p>Security</p>

            <h2>SECURE</h2>

          </div>

          <span>

            <FaShieldAlt />

          </span>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="dashboard-content-grid">

        {/* SERVER METRICS */}

        <div className="chart-container">

          <div className="chart-header">

            <FaMicrochip />

            Server Metrics

          </div>

          <div
            style={{
              marginTop:"25px"
            }}
          >

            <div className="recent-item">

              <div>

                <h4>

                  CPU Usage

                </h4>

                <p>

                  Current processor load

                </p>

              </div>

              <span>

                42%

              </span>

            </div>

            <div className="recent-item">

              <div>

                <h4>

                  RAM Usage

                </h4>

                <p>

                  Memory consumption

                </p>

              </div>

              <span>

                6.2 GB

              </span>

            </div>

            <div className="recent-item">

              <div>

                <h4>

                  Network Speed

                </h4>

                <p>

                  Active throughput

                </p>

              </div>

              <span>

                1.2 Gbps

              </span>

            </div>

            <div className="recent-item">

              <div>

                <h4>

                  Disk Usage

                </h4>

                <p>

                  SSD storage usage

                </p>

              </div>

              <span>

                68%

              </span>

            </div>

          </div>

        </div>

        {/* SERVICE STATUS */}

        <div className="recent-card">

          <div className="section-title">

            Live Service Status

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Spring Boot Backend

              </h4>

              <p>

                API services operational

              </p>

            </div>

            <span>

              ONLINE

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                PostgreSQL Database

              </h4>

              <p>

                Connected successfully

              </p>

            </div>

            <span>

              ACTIVE

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                FastAPI Gateway

              </h4>

              <p>

                Vector search enabled

              </p>

            </div>

            <span>

              RUNNING

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Security Layer

              </h4>

              <p>

                JWT authentication active

              </p>

            </div>

            <span>

              SECURE

            </span>

          </div>

        </div>

      </div>

      {/* BOTTOM GRID */}

      <div className="bottom-grid">

        {/* DEVOPS */}

        <div className="activity-card">

          <div className="section-title">

            DevOps Pipeline

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Build Status

              </h4>

              <p>

                Latest deployment build

              </p>

            </div>

            <span>

              SUCCESS

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Git Integration

              </h4>

              <p>

                Repository synchronized

              </p>

            </div>

            <span>

              SYNCED

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Docker Services

              </h4>

              <p>

                Container runtime status

              </p>

            </div>

            <span>

              HEALTHY

            </span>

          </div>

        </div>

        {/* SYSTEM OVERVIEW */}

        <div className="activity-card">

          <div className="section-title">

            System Overview

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Uptime

              </h4>

              <p>

                Continuous server runtime

              </p>

            </div>

            <span>

              72h

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Last Sync

              </h4>

              <p>

                Cloud synchronization

              </p>

            </div>

            <span>

              2m ago

            </span>

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Active Sessions

              </h4>

              <p>

                Logged-in users

              </p>

            </div>

            <span>

              28

            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SystemMonitor