import { useState } from "react"

import {
  FaSearch,
  FaShieldAlt,
  FaBell,
  FaCloud,
  FaCog,
  FaLock,
  FaDatabase,
  FaCheckCircle
} from "react-icons/fa"

import API from "../api"

function SearchPage() {

  const [query, setQuery]
    = useState("")

  const [results, setResults]
    = useState([])

  const [loading, setLoading]
    = useState(false)

  const handleSearch = async (
    customQuery = query
  ) => {

    if(!customQuery.trim()) return

    try {

      setLoading(true)

      const response =
        await API.get(
          `/search?query=${customQuery}`
        )

      setResults(response.data)

    } catch(error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="search-page-modern">

      <div className="search-hero-modern">

        <div className="hero-badge">

          ⚡ AI Powered Configuration Search

        </div>

        <h1>
          Smart Settings Search
        </h1>

        <p>
          Instantly search configurations,
          preferences, security settings,
          cloud options, notifications,
          and system controls with
          intelligent semantic search.
        </p>

      </div>

      <div className="search-overview-grid">

        <div className="overview-card blue-overview">

          <div>

            <p>
              Configurations
            </p>

            <h2>
              40+
            </h2>

          </div>

          <span>
            ⚙️
          </span>

        </div>

        <div className="overview-card purple-overview">

          <div>

            <p>
              Categories
            </p>

            <h2>
              13
            </h2>

          </div>

          <span>
            📂
          </span>

        </div>

        <div className="overview-card green-overview">

          <div>

            <p>
              Search Engine
            </p>

            <h2>
              Active
            </h2>

          </div>

          <span>
            🧠
          </span>

        </div>

      </div>

      <div className="search-box-modern">

        <div className="search-input-wrapper">

          <FaSearch className="search-main-icon" />

          <input
            type="text"
            placeholder="Search privacy, notifications, cloud, security..."
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {

              if(e.key === "Enter") {

                handleSearch()
              }
            }}
          />

          <button
            onClick={() =>
              handleSearch()
            }
          >

            Search

          </button>

        </div>

        <div className="quick-search-row">

          <button
            onClick={() => {

              setQuery("privacy")

              handleSearch("privacy")
            }}
          >
            🔒 Privacy
          </button>

          <button
            onClick={() => {

              setQuery("notifications")

              handleSearch("notifications")
            }}
          >
            🔔 Notifications
          </button>

          <button
            onClick={() => {

              setQuery("security")

              handleSearch("security")
            }}
          >
            🛡 Security
          </button>

          <button
            onClick={() => {

              setQuery("cloud")

              handleSearch("cloud")
            }}
          >
            ☁ Cloud
          </button>

          <button
            onClick={() => {

              setQuery("storage")

              handleSearch("storage")
            }}
          >
            💾 Storage
          </button>

        </div>

      </div>

      {
        loading

          ? (

            <div className="search-loading-modern">

              <div className="loader-circle"></div>

              <p>
                Searching configurations...
              </p>

            </div>

          )

          : (

            <>

              {
                results.length > 0 && (

                  <div className="results-count">

                    <FaCheckCircle />

                    Found {results.length}
                    matching configurations

                  </div>

                )
              }

              <div className="results-grid-modern">

                {
                  results.length === 0

                    ? (

                      <div className="empty-state-modern">

                        <div className="empty-icon">

                          <FaSearch />

                        </div>

                        <h2>
                          Search Your Settings
                        </h2>

                        <p>
                          Explore privacy,
                          security, storage,
                          cloud, messaging,
                          and configuration
                          settings instantly.
                        </p>

                      </div>

                    )

                    : (

                      results.map((setting) => (

                        <div
                          className="search-card-modern"
                          key={setting.id}
                        >

                          <div className="card-top">

                            <div className="card-icon">

                              <FaCog />

                            </div>

                            <div>

                              <h3>
                                {setting.name}
                              </h3>

                              <p>
                                Enterprise Configuration
                              </p>

                            </div>

                          </div>

                          <div className="card-description">

                            {setting.description}

                          </div>

                          <div className="card-value-box">

                            <span>
                              Current Value
                            </span>

                            <strong>
                              {setting.value}
                            </strong>

                          </div>

                          <div className="card-footer">

                            <span className="tag-modern">

                              Active Setting

                            </span>

                          </div>

                        </div>

                      ))

                    )
                }

              </div>

            </>

          )
      }

    </div>
  )
}

export default SearchPage