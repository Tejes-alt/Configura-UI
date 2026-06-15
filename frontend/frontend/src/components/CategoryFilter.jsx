function CategoryFilter({

  categories,

  selected,

  setSelected

}) {

  return (
    <div className="filter-row">

      {
        categories.map((category) => (

          <button
            key={category}
            className={
              selected === category
                ? "active-filter"
                : ""
            }
            onClick={() =>
              setSelected(category)
            }
          >
            {category}
          </button>

        ))
      }

    </div>
  )
}

export default CategoryFilter