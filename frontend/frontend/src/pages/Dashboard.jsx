import { useEffect, useState } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts"

import API from "../api"

function Dashboard() {

  const [settings, setSettings] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchDashboard()

  }, [])

  const fetchDashboard = async () => {

    try {

      const response = await API.get(
        "/settings"
      )

      setSettings(response.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  const totalSettings = settings.length

  const systemSettings = settings.filter(
    (s) => s.systemSetting
  ).length

  const userSettings = settings.filter(
    (s) => !s.systemSetting
  ).length

  const totalCategories = new Set(
    settings.map((s) => s.category)
  ).size

  const categoryMap = {}

  settings.forEach((setting) => {

    categoryMap[setting.category] =
      (categoryMap[setting.category] || 0) + 1
  })

  const chartData = Object.keys(categoryMap).map(
    (key) => ({
      category: key,
      value: categoryMap[key]
    })
  )

  const recentSettings = [...settings]
    .reverse()
    .slice(0, 5)

  const COLORS = [
    "#2563eb",
    "#7c3aed",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4"
  ]

  return (
    <div className="dashboard-page">

      <div className="dashboard-hero">

        <div>

          <h1>
            Settings & Configuration Dashboard
          </h1>

          <p>
            Manage system configurations,
            monitor preferences,
            and control application settings
            from one powerful dashboard.
          </p>

        </div>

        <div className="dashboard-badge">
          Live Configuration Center
        </div>

      </div>

      {
        loading

          ? (
            <div className="dashboard-loading">
              Loading Dashboard...
            </div>
          )

          : (
            <>

              <div className="stats-grid">

                <div className="stat-card blue-card">

                  <div>
                    <p>Total Settings</p>
                    <h2>{totalSettings}</h2>
                  </div>

                  <span>⚙️</span>

                </div>

                <div className="stat-card purple-card">

                  <div>
                    <p>System Settings</p>
                    <h2>{systemSettings}</h2>
                  </div>

                  <span>🛡️</span>

                </div>

                <div className="stat-card green-card">

                  <div>
                    <p>User Settings</p>
                    <h2>{userSettings}</h2>
                  </div>

                  <span>👤</span>

                </div>

                <div className="stat-card orange-card">

                  <div>
                    <p>Categories</p>
                    <h2>{totalCategories}</h2>
                  </div>

                  <span>📂</span>

                </div>

              </div>

              <div className="dashboard-content-grid">

                <div className="chart-container">

                  <div className="chart-header">
                    Settings by Category
                  </div>

                  <ResponsiveContainer
                    width="100%"
                    height={320}
                  >

                    <PieChart>

                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="category"
                        outerRadius={110}
                        label
                      >

                        {
                          chartData.map((_, index) => (

                            <Cell
                              key={index}
                              fill={
                                COLORS[
                                  index % COLORS.length
                                ]
                              }
                            />

                          ))
                        }

                      </Pie>

                      <Tooltip />

                    </PieChart>

                  </ResponsiveContainer>

                </div>

                <div className="chart-container">

                  <div className="chart-header">
                    Category Distribution
                  </div>

                  <ResponsiveContainer
                    width="100%"
                    height={320}
                  >

                    <BarChart data={chartData}>

                      <CartesianGrid strokeDasharray="3 3" />

                      <XAxis dataKey="category" />

                      <YAxis />

                      <Tooltip />

                      <Legend />

                      <Bar
                        dataKey="value"
                        fill="#2563eb"
                        radius={[10, 10, 0, 0]}
                      />

                    </BarChart>

                  </ResponsiveContainer>

                </div>

              </div>

              <div className="bottom-grid">

                <div className="recent-card">

                  <div className="section-title">
                    Recently Added Settings
                  </div>

                  {
                    recentSettings.length === 0

                      ? (
                        <p>No settings found</p>
                      )

                      : (
                        recentSettings.map((setting) => (

                          <div
                            className="recent-item"
                            key={setting.id}
                          >

                            <div>

                              <h4>
                                {setting.keyName}
                              </h4>

                              <p>
                                {setting.category}
                              </p>

                            </div>

                            <span>

                              {
                                setting.systemSetting
                                  ? "System"
                                  : "User"
                              }

                            </span>

                          </div>

                        ))
                      )
                  }

                </div>

                <div className="activity-card">

                  <div className="section-title">
                    System Overview
                  </div>

                  <div className="activity-item">

                    <span>
                      🔒 Privacy Configurations
                    </span>

                    <strong>

                      {
                        settings.filter(
                          s =>
                            s.category === "Privacy"
                        ).length
                      }

                    </strong>

                  </div>

                  <div className="activity-item">

                    <span>
                      🔔 Notification Settings
                    </span>

                    <strong>

                      {
                        settings.filter(
                          s =>
                            s.category ===
                            "Notifications"
                        ).length
                      }

                    </strong>

                  </div>

                  <div className="activity-item">

                    <span>
                      ⚡ Active Configurations
                    </span>

                    <strong>
                      {settings.length}
                    </strong>

                  </div>

                  <div className="activity-item">

                    <span>
                      🧠 Smart Search Ready
                    </span>

                    <strong>
                      Enabled
                    </strong>

                  </div>

                </div>

              </div>

            </>
          )
      }

    </div>
  )
}

export default Dashboard