import { useState } from "react"

function AddSettingModal({ createSetting }) {

  const [form, setForm] = useState({
    keyName: "",
    value: "",
    description: "",
    category: "",
    systemSetting: false
  })

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target

    setForm({
      ...form,
      [name]: type === "checkbox"
        ? checked
        : value
    })
  }

  const submit = () => {
    createSetting(form)
  }

  return (
    <div className="card">

      <h2>Add Setting</h2>

      <input
        name="keyName"
        placeholder="Setting Name"
        onChange={handleChange}
      />

      <input
        name="value"
        placeholder="Value"
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />

      <label>

        <input
          type="checkbox"
          name="systemSetting"
          onChange={handleChange}
        />

        System Setting

      </label>

      <button onClick={submit}>
        Create Setting
      </button>

    </div>
  )
}

export default AddSettingModal