import { useEffect, useState } from "react"

import toast, {
  Toaster
} from "react-hot-toast"

import {
  FaCog,
  FaShieldAlt,
  FaBell,
  FaUserCog,
  FaTrash,
  FaSave,
  FaPlus,
  FaLock
} from "react-icons/fa"

import API from "../api"

function SettingsPage() {

  const role =
    localStorage.getItem("role")

  if(role !== "ADMIN") {

    return (

      <div className="unauthorized-page">

        <FaLock className="lock-icon" />

        <h1>
          Access Restricted
        </h1>

        <p>
          Only ADMIN users can manage
          configurations and perform
          CRUD operations.
        </p>

      </div>
    )
  }

  const [settings, setSettings]
    = useState([])

  const [loading, setLoading]
    = useState(true)

  const [selectedCategory,
    setSelectedCategory]
      = useState("All")

  const [search, setSearch]
    = useState("")

  const [form, setForm]
    = useState({

      keyName: "",

      value: "",

      description: "",

      category: "",

      systemSetting: false
    })

  useEffect(() => {

    fetchSettings()

  }, [])

  const fetchSettings = async () => {

    try {

      const response =
        await API.get("/settings")

      setSettings(response.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  const createSetting = async () => {

    try {

      await API.post(
        "/settings",
        form
      )

      toast.success(
        "Setting Created"
      )

      setForm({

        keyName: "",

        value: "",

        description: "",

        category: "",

        systemSetting: false
      })

      fetchSettings()

    } catch {

      toast.error(
        "Creation Failed"
      )
    }
  }

  const updateSetting = async (
    id,
    value
  ) => {

    try {

      await API.put(
        `/settings/${id}`,
        { value }
      )

      toast.success("Updated")

      fetchSettings()

    } catch {

      toast.error(
        "Update Failed"
      )
    }
  }

  const deleteSetting = async (id) => {

    try {

      await API.delete(
        `/settings/${id}`
      )

      toast.success("Deleted")

      fetchSettings()

    } catch {

      toast.error(
        "Delete Failed"
      )
    }
  }

  const categories = [

    "All",

    ...new Set(
      settings.map(
        s => s.category
      )
    )
  ]

  const filtered = settings.filter(
    (s) => {

      const categoryMatch =

        selectedCategory === "All"

          ? true

          : s.category
              === selectedCategory

      const searchMatch =

        s.keyName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      return (
        categoryMatch
        && searchMatch
      )
    }
  )

  const iconMap = {

    Privacy: <FaShieldAlt />,

    Notifications: <FaBell />,

    User: <FaUserCog />
  }

  return (

    <div className="settings-page">

      <Toaster />

      <div className="settings-hero">

        <div>

          <div className="dashboard-badge">

            🔐 ADMIN CONTROL PANEL

          </div>

          <h1>
            Settings Management
          </h1>

          <p>
            Manage system configurations,
            application preferences,
            categories, permissions,
            and enterprise-level
            settings from one dashboard.
          </p>

        </div>

        <div className="settings-badge">

          <FaCog />

          Smart Configuration Center

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card blue-card">

          <div>

            <p>
              Total Settings
            </p>

            <h2>
              {settings.length}
            </h2>

          </div>

          <span>
            ⚙️
          </span>

        </div>

        <div className="stat-card green-card">

          <div>

            <p>
              System Settings
            </p>

            <h2>

              {
                settings.filter(
                  s => s.systemSetting
                ).length
              }

            </h2>

          </div>

          <span>
            🛡️
          </span>

        </div>

        <div className="stat-card purple-card">

          <div>

            <p>
              Categories
            </p>

            <h2>
              {categories.length - 1}
            </h2>

          </div>

          <span>
            📂
          </span>

        </div>

      </div>

      <div className="settings-top-grid">

        <div className="create-card">

          <div className="section-header">

            <FaPlus />

            Add New Setting

          </div>

          <input
            placeholder="Setting Name"
            value={form.keyName}
            onChange={(e) =>
              setForm({
                ...form,
                keyName: e.target.value
              })
            }
          />

          <input
            placeholder="Value"
            value={form.value}
            onChange={(e) =>
              setForm({
                ...form,
                value: e.target.value
              })
            }
          />

          <input
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value
              })
            }
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category:
                  e.target.value
              })
            }
          />

          <label className="checkbox-row">

            <input
              type="checkbox"
              checked={
                form.systemSetting
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  systemSetting:
                    e.target.checked
                })
              }
            />

            System Setting

          </label>

          <button
            className="create-btn"
            onClick={createSetting}
          >

            <FaPlus />

            Create Setting

          </button>

        </div>

        <div className="settings-side-panel">

          <div className="section-header">

            <FaCog />

            Configuration Summary

          </div>

          <div className="summary-item">

            <span>
              Total Settings
            </span>

            <strong>
              {settings.length}
            </strong>

          </div>

          <div className="summary-item">

            <span>
              System Settings
            </span>

            <strong>

              {
                settings.filter(
                  s => s.systemSetting
                ).length
              }

            </strong>

          </div>

          <div className="summary-item">

            <span>
              User Settings
            </span>

            <strong>

              {
                settings.filter(
                  s => !s.systemSetting
                ).length
              }

            </strong>

          </div>

          <div className="summary-item">

            <span>
              Categories
            </span>

            <strong>
              {categories.length - 1}
            </strong>

          </div>

        </div>

      </div>

      <div className="settings-toolbar">

        <input
          className="search-input"
          placeholder="Search settings..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <div className="category-row">

          {
            categories.map((category) => (

              <button
                key={category}
                className={
                  selectedCategory
                    === category

                    ? "active-category"

                    : ""
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >

                {category}

              </button>

            ))
          }

        </div>

      </div>

      {
        loading

          ? (
            <div className="settings-loading">

              Loading Settings...

            </div>
          )

          : (
            <div className="settings-grid">

              {
                filtered.map((setting) => (

                  <SettingItem
                    key={setting.id}
                    setting={setting}
                    updateSetting={
                      updateSetting
                    }
                    deleteSetting={
                      deleteSetting
                    }
                    iconMap={iconMap}
                  />

                ))
              }

            </div>
          )
      }

    </div>
  )
}

function SettingItem({

  setting,

  updateSetting,

  deleteSetting,

  iconMap

}) {

  const [value, setValue]
    = useState(setting.value)

  return (

    <div className="setting-card-new">

      <div className="setting-header">

        <div className="setting-icon">

          {
            iconMap[
              setting.category
            ] || <FaCog />
          }

        </div>

        <div>

          <h3>
            {setting.keyName}
          </h3>

          <p>
            {setting.category}
          </p>

        </div>

      </div>

      <div className="setting-description">

        {setting.description}

      </div>

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />

      <div className="setting-badges">

        <span>

          {
            setting.systemSetting
              ? "System"
              : "User"
          }

        </span>

      </div>

      <div className="setting-actions">

        <button
          className="save-btn"
          onClick={() =>
            updateSetting(
              setting.id,
              value
            )
          }
        >

          <FaSave />

          Save

        </button>

        <button
          className="delete-btn-new"
          onClick={() =>
            deleteSetting(
              setting.id
            )
          }
        >

          <FaTrash />

          Delete

        </button>

      </div>

    </div>
  )
}

export default SettingsPage