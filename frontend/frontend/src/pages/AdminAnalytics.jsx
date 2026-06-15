import {
  FaUsers,
  FaUserShield,
  FaDatabase,
  FaServer,
  FaChartLine
} from "react-icons/fa"

import {
  useEffect,
  useState
} from "react"

import API from "../api"

function AdminAnalytics() {

  const [analytics,setAnalytics]
    = useState({

      totalUsers:0,
      totalAdmins:0,
      totalConfigs:0,
      serverHealth:"0%"
    })

  useEffect(() => {

    fetchAnalytics()

  },[])

  const fetchAnalytics = async () => {

    try{

      const response =
        await API.get(
          "/analytics"
        )

      setAnalytics(
        response.data
      )

    } catch(error){

      console.log(error)
    }
  }

  return (

    <div className="dashboard-page">

      <div className="dashboard-hero">

        <div className="dashboard-badge">

          📊 ADMIN ANALYTICS

        </div>

        <h1>

          Enterprise Analytics

        </h1>

        <p>

          Real-time monitoring of
          users, configurations,
          system activity,
          and infrastructure.

        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card blue-card">

          <div>

            <p>Total Users</p>

            <h2>

              {
                analytics.totalUsers
              }

            </h2>

          </div>

          <span>

            <FaUsers />

          </span>

        </div>

        <div className="stat-card purple-card">

          <div>

            <p>Total Admins</p>

            <h2>

              {
                analytics.totalAdmins
              }

            </h2>

          </div>

          <span>

            <FaUserShield />

          </span>

        </div>

        <div className="stat-card green-card">

          <div>

            <p>Configurations</p>

            <h2>

              {
                analytics.totalConfigs
              }

            </h2>

          </div>

          <span>

            <FaDatabase />

          </span>

        </div>

        <div className="stat-card orange-card">

          <div>

            <p>Server Health</p>

            <h2>

              {
                analytics.serverHealth
              }

            </h2>

          </div>

          <span>

            <FaServer />

          </span>

        </div>

      </div>

      <div className="dashboard-content-grid">

        <div className="chart-container">

          <div className="chart-header">

            <FaChartLine />

            Platform Overview

          </div>

          <div
            style={{
              marginTop:"30px"
            }}
          >

            <div
              className="recent-item"
            >

              <div>

                <h4>

                  Registered Users

                </h4>

                <p>

                  Active platform users

                </p>

              </div>

              <span>

                {
                  analytics.totalUsers
                }

              </span>

            </div>

            <div
              className="recent-item"
            >

              <div>

                <h4>

                  Administrators

                </h4>

                <p>

                  System management accounts

                </p>

              </div>

              <span>

                {
                  analytics.totalAdmins
                }

              </span>

            </div>

            <div
              className="recent-item"
            >

              <div>

                <h4>

                  Configurations

                </h4>

                <p>

                  Total stored configurations

                </p>

              </div>

              <span>

                {
                  analytics.totalConfigs
                }

              </span>

            </div>

          </div>

        </div>

        <div className="recent-card">

          <div className="section-title">

            Live System Status

          </div>

          <div className="recent-item">

            <div>

              <h4>

                Spring Boot Backend

              </h4>

              <p>

                API Services Running

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

                Connected Successfully

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

                Semantic Search Active

              </p>

            </div>

            <span>

              OK

            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminAnalytics