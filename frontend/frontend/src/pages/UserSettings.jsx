function UserSettings() {

  return (
    <div className="page">

      <h1 className="page-title">
        User Preferences
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>Notification Preferences</h2>

          <p>
            Configure email alerts,
            push notifications,
            and activity updates.
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Privacy Settings</h2>

          <p>
            Manage account privacy,
            visibility, and security
            preferences.
          </p>

        </div>

      </div>

    </div>
  )
}

export default UserSettings