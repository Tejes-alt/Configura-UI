function GroupCard({ group }) {

  return (
    <div className="card">

      <h3>{group.name}</h3>

      <p>{group.description}</p>

    </div>
  )
}

export default GroupCard