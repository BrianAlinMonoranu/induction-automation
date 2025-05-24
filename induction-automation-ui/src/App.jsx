import { useState } from 'react';
import SearchBarComponent from './searchBar';
import Table from './table';
import { employees } from './data';

const filterOptions = [
  {label: 'First Name (A-Z)', value: 'firstName'},
  {label: 'Surname (A-Z)', value: 'surname'},
  {label: 'Induction: Completed', value: 'Completed'},
  {label: 'Induction: Not Completed', value: 'Incomplete'}
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredData = employees
    .filter(item => {
      if (!searchTerm.trim()) return true;
      return `${item.firstName} ${item.surname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      if (filter === 'firstName') return a.firstName.localeCompare(b.firstName);
      if (filter === 'surname') return a.surname.localeCompare(b.surname);
      if (filter === 'Completed') return (b.inductionStatus === 'Completed' ? 1 : -1) - (a.inductionStatus === 'Completed' ? 1 : -1);
      if (filter === 'Incomplete') return (a.inductionStatus === 'Completed' ? 1 : -1) - (b.inductionStatus === 'Completed' ? 1 : -1);
      return 0;
    });

  return (
    <div>
      <SearchBarComponent 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        filterOptions={filterOptions}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;