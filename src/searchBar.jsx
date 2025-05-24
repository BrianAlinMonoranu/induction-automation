import './searchBar.css';

export default function SearchBarComponent({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  filterOptions,
  filteredData
}) {
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Employee"
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">No Filter</option>
          {filterOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="result-list">
        {filteredData.map((item, idx) => (
          <div key={idx} className="result-card">
            <div className="name">{item.firstName} {item.surname}</div>
            <div className="status">Induction: {item.inductionStatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}