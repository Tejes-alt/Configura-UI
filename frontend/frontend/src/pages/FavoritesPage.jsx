import {
  FaStar,
  FaShieldAlt,
  FaCloud,
  FaBell,
  FaSearch,
  FaHeart,
  FaRocket,
  FaDatabase
} from "react-icons/fa"

function FavoritesPage() {

  const favorites = [

    {
      title:"Privacy Mode",
      icon:<FaShieldAlt />,
      desc:
        "Advanced privacy protection and secure access controls.",
      color:"blue-gradient"
    },

    {
      title:"Cloud Backup",
      icon:<FaCloud />,
      desc:
        "Automatic cloud synchronization and recovery system.",
      color:"purple-gradient"
    },

    {
      title:"Notification Control",
      icon:<FaBell />,
      desc:
        "Manage alerts, updates, and system notifications.",
      color:"orange-gradient"
    },

    {
      title:"AI Search",
      icon:<FaSearch />,
      desc:
        "Semantic vector-powered intelligent search engine.",
      color:"green-gradient"
    },

    {
      title:"Quick Sync",
      icon:<FaRocket />,
      desc:
        "Ultra-fast configuration deployment across systems.",
      color:"blue-gradient"
    },

    {
      title:"Database Mirror",
      icon:<FaDatabase />,
      desc:
        "Real-time database replication and monitoring tools.",
      color:"purple-gradient"
    }

  ]

  return (

    <div className="favorites-page">

      <div className="favorites-header">

        <div className="dashboard-badge">

          ⭐ FAVORITE MODULES

        </div>

        <h1>

          Favorite Configurations

        </h1>

        <p>

          Access your most used
          enterprise configurations,
          smart tools, and
          personalized modules.

        </p>

      </div>

      <div className="favorites-stats">

        <div className="favorite-stat-card">

          <div>

            <h2>

              12

            </h2>

            <p>

              Saved Configurations

            </p>

          </div>

          <span>

            <FaHeart />

          </span>

        </div>

        <div className="favorite-stat-card purple-card">

          <div>

            <h2>

              98%

            </h2>

            <p>

              Sync Accuracy

            </p>

          </div>

          <span>

            <FaCloud />

          </span>

        </div>

        <div className="favorite-stat-card green-card">

          <div>

            <h2>

              24/7

            </h2>

            <p>

              Smart Monitoring

            </p>

          </div>

          <span>

            <FaRocket />

          </span>

        </div>

      </div>

      <div className="favorites-grid">

        {

          favorites.map(

            (item,index) => (

              <div
                key={index}
                className={`favorite-card-modern ${item.color}`}
              >

                <div className="favorite-icon">

                  {item.icon}

                </div>

                <h2>

                  {item.title}

                </h2>

                <p>

                  {item.desc}

                </p>

                <button>

                  Open Module

                </button>

              </div>
            )
          )
        }

      </div>

    </div>
  )
}

export default FavoritesPage