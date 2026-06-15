import { useState } from "react"

function SettingCard({

  setting,

  updateSetting,

  deleteSetting

}) {

  const [value, setValue] = useState(
    setting.value
  )

  return (
    <div className="card">

      <h3>{setting.keyName}</h3>

      <p>{setting.description}</p>

      <p>{setting.category}</p>

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />

      <div className="button-row">

        <button
          onClick={() =>
            updateSetting(
              setting.id,
              value
            )
          }
        >
          Save
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteSetting(setting.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default SettingCard