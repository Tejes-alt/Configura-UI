import {
  FaUser,
  FaUserShield,
  FaTrash,
  FaEdit
} from "react-icons/fa"

import {
  useEffect,
  useState
} from "react"

import API from "../api"

function AdminUsers() {

  const [users,setUsers]
    = useState([])

  useEffect(() => {

    fetchUsers()

  },[])

  const fetchUsers = async () => {

    try{

      const response =
        await API.get(
          "/users"
        )

      setUsers(
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

          👥 USER MANAGEMENT

        </div>

        <h1>

          Manage Users

        </h1>

        <p>

          Monitor platform users,
          manage permissions,
          and control access.

        </p>

      </div>

      <div className="recent-card">

        {

          users.map(

            (user,index)=>(

              <div
                key={index}
                className="recent-item"
              >

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"18px"
                  }}
                >

                  <div className="favorite-icon">

                    {

                      user.role?.roleName
                        === "ADMIN"

                      ? <FaUserShield />

                      : <FaUser />

                    }

                  </div>

                  <div>

                    <h4>

                      {user.username}

                    </h4>

                    <p>

                      {user.email}

                    </p>

                  </div>

                </div>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"14px"
                  }}
                >

                  <span
                    className="dashboard-badge"
                  >

                    {
                      user.role?.roleName
                    }

                  </span>

                  <button
                    className="save-btn"
                  >

                    <FaEdit />

                  </button>

                  <button
                    className="logout-btn"
                  >

                    <FaTrash />

                  </button>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  )
}

export default AdminUsers