function SearchBar({
  query,
  setQuery,
  search
}) {

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search settings..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button onClick={search}>
        Search
      </button>

    </div>
  )
}

export default SearchBar