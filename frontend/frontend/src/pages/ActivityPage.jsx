function ActivityPage() {

  const activities = [

    "Viewed Security Settings",

    "Changed Theme Preference",

    "Searched Cloud Configurations",

    "Updated Notification Settings"
  ]

  return (

    <div className="activity-page">

      <h1>

        Recent Activity

      </h1>

      <div className="activity-list">

        {
          activities.map((item,index)=>(

            <div
              key={index}
              className="activity-item"
            >

              ⚡ {item}

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default ActivityPage