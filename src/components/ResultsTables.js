// UsersTable.js
import React, { useMemo, useState } from 'react'; // Combine imports from 'react'
import { useTable } from 'react-table';
import Tile from "./Tile.js";
import '../css/pages.css';
import "../css/tiles.css";
import sort from "../images/Sort icon.png";

//import './UsersTable.css'; // Optional: for custom styling

const ResultsTable = ({ data, showAddUserButton = true  }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Users',
        accessor: 'user', // The key should be 'user' to access each user object
        Cell: ({ cell: { value } }) => <Tile user={value} />, // Render UserTile in each cell
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    }
  );

  return (
    <table {...getTableProps()} className="users-table">
      <thead class="results-head">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
        {showAddUserButton && (
        <button class="user-add-button" onClick={togglePopup}> + Add User</button>
      )}   
        <button class="sort-btn"> <img src={sort}/></button>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr class="results-row"{...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    
  );
};

export default ResultsTable;
