import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

// atble data
const columns = [
  {
    name: "S.No",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Customer Name",
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true
  },
  {
    name: "Phone Number",
    selector: (row) => row.number,
    sortable: true
  },
  {
    name: "Location",
    selector: (row) => row.location,
    sortable: true
  },
  {
    name: "Created At",
    selector: (row) => row.createdAt,
    sortable: true
  }
];

const data = [
  {
    id: 1,
    name: "Beetlejuice",
    age: "25",
    year: "1988",
    number: "8564758355",
    location: "Hyderabad",
    createdAt: "January 10"
  },
  {
    id: 2,
    name: "Ghostbusters",
    age: "30",
    year: "1984",
    number: "9867453210",
    location: "Bangalore",
    createdAt: "February 15"
  },
  {
    id: 3,
    name: "Matrix",
    age: "35",
    year: "1999",
    number: "7896541230",
    location: "Mumbai",
    createdAt: "March 20"
  },
  {
    id: 4,
    name: "Inception",
    age: "40",
    year: "2010",
    number: "7012458963",
    location: "Chennai",
    createdAt: "April 25"
  },
  {
    id: 5,
    name: "Interstellar",
    age: "45",
    year: "2014",
    number: "6354789521",
    location: "Delhi",
    createdAt: "May 30"
  },
  {
    id: 6,
    name: "The Shawshank Redemption",
    age: "50",
    year: "1994",
    number: "9658741236",
    location: "Kolkata",
    createdAt: "June 5"
  },
  {
    id: 7,
    name: "The Dark Knight",
    age: "55",
    year: "2008",
    number: "5874123654",
    location: "Pune",
    createdAt: "July 10"
  },
  {
    id: 8,
    name: "Fight Club",
    age: "60",
    year: "1999",
    number: "7012589634",
    location: "Goa",
    createdAt: "August 15"
  },
  {
    id: 9,
    name: "Pulp Fiction",
    age: "65",
    year: "1994",
    number: "6354789652",
    location: "Jaipur",
    createdAt: "September 20"
  },
  {
    id: 10,
    name: "The Godfather",
    age: "70",
    year: "1972",
    number: "9658741236",
    location: "Lucknow",
    createdAt: "October 25"
  },
  {
    id: 11,
    name: "Forrest Gump",
    age: "75",
    year: "1994",
    number: "5874123695",
    location: "Ahmedabad",
    createdAt: "November 30"
  },
  {
    id: 12,
    name: "The Lord of the Rings",
    age: "80",
    year: "2001",
    number: "7012589632",
    location: "Surat",
    createdAt: "December 5"
  },
  {
    id: 13,
    name: "The Matrix",
    age: "85",
    year: "1999",
    number: "6354789654",
    location: "Indore",
    createdAt: "January 10"
  },
  {
    id: 14,
    name: "Inception",
    age: "90",
    year: "2010",
    number: "9658741238",
    location: "Bhopal",
    createdAt: "February 15"
  },
  {
    id: 15,
    name: "The Dark Knight",
    age: "95",
    year: "2008",
    number: "5874123696",
    location: "Nagpur",
    createdAt: "March 20"
  },
  {
    id: 16,
    name: "Pulp Fiction",
    age: "100",
    year: "1994",
    number: "7012589635",
    location: "Kanpur",
    createdAt: "April 25"
  },
  {
    id: 17,
    name: "The Godfather",
    age: "105",
    year: "1972",
    number: "6354789656",
    location: "Ludhiana",
    createdAt: "May 30"
  },
  {
    id: 18,
    name: "Forrest Gump",
    age: "110",
    year: "1994",
    number: "9658741240",
    location: "Agra",
    createdAt: "June 5"
  },
  {
    id: 19,
    name: "The Lord of the Rings",
    age: "115",
    year: "2001",
    number: "5874123698",
    location: "Varanasi",
    createdAt: "July 10"
  },
  {
    id: 20,
    name: "The Matrix",
    age: "120",
    year: "1999",
    number: "7012589637",
    location: "Allahabad",
    createdAt: "August 15"
  },
  {
    id: 21,
    name: "Inception",
    age: "125",
    year: "2010",
    number: "6354789658",
    location: "Jabalpur",
    createdAt: "September 20"
  },
  {
    id: 22,
    name: "The Dark Knight",
    age: "130",
    year: "2008",
    number: "9658741242",
    location: "Gwalior",
    createdAt: "October 25"
  },
  {
    id: 23,
    name: "Pulp Fiction",
    age: "135",
    year: "1994",
    number: "5874123690",
    location: "Guwahati",
    createdAt: "November 30"
  },
  {
    id: 24,
    name: "The Godfather",
    age: "140",
    year: "1972",
    number: "7012589639",
    location: "Patna",
    createdAt: "December 5"
  },
  {
    id: 25,
    name: "Forrest Gump",
    age: "145",
    year: "1994",
    number: "6354789660",
    location: "Ranchi",
    createdAt: "January 10"
  },
  {
    id: 26,
    name: "The Lord of the Rings",
    age: "150",
    year: "2001",
    number: "9658741244",
    location: "Raipur",
    createdAt: "February 15"
  },
  {
    id: 27,
    name: "The Matrix",
    age: "155",
    year: "1999",
    number: "5874123692",
    location: "Dehradun",
    createdAt: "March 20"
  },
  {
    id: 28,
    name: "Inception",
    age: "160",
    year: "2010",
    number: "7012589641",
    location: "Chandigarh",
    createdAt: "April 25"
  },
  {
    id: 29,
    name: "The Dark Knight",
    age: "165",
    year: "2008",
    number: "6354789662",
    location: "Amritsar",
    createdAt: "May 30"
  },
  {
    id: 30,
    name: "Pulp Fiction",
    age: "170",
    year: "1994",
    number: "9658741246",
    location: "Shimla",
    createdAt: "June 5"
  },
  {
    id: 31,
    name: "The Godfather",
    age: "175",
    year: "1972",
    number: "5874123694",
    location: "Srinagar",
    createdAt: "July 10"
  },
  {
    id: 32,
    name: "Forrest Gump",
    age: "180",
    year: "1994",
    number: "7012589643",
    location: "Gangtok",
    createdAt: "August 15"
  },
  {
    id: 33,
    name: "The Lord of the Rings",
    age: "185",
    year: "2001",
    number: "6354789664",
    location: "Itanagar",
    createdAt: "September 20"
  },
  {
    id: 34,
    name: "The Matrix",
    age: "190",
    year: "1999",
    number: "9658741248",
    location: "Dispur",
    createdAt: "October 25"
  },
  {
    id: 35,
    name: "Inception",
    age: "195",
    year: "2010",
    number: "5874123697",
    location: "Guwahati",
    createdAt: "November 30"
  },
  {
    id: 36,
    name: "The Dark Knight",
    age: "200",
    year: "2008",
    number: "7012589645",
    location: "Patna",
    createdAt: "December 5"
  },
  {
    id: 37,
    name: "Pulp Fiction",
    age: "205",
    year: "1994",
    number: "6354789666",
    location: "Ranchi",
    createdAt: "January 10"
  },
  {
    id: 38,
    name: "The Godfather",
    age: "210",
    year: "1972",
    number: "9658741250",
    location: "Raipur",
    createdAt: "February 15"
  },
  {
    id: 39,
    name: "Forrest Gump",
    age: "215",
    year: "1994",
    number: "5874123699",
    location: "Dehradun",
    createdAt: "March 20"
  },
  {
    id: 40,
    name: "The Lord of the Rings",
    age: "220",
    year: "2001",
    number: "7012589647",
    location: "Chandigarh",
    createdAt: "April 25"
  },
  {
    id: 41,
    name: "The Matrix",
    age: "225",
    year: "1999",
    number: "6354789668",
    location: "Amritsar",
    createdAt: "May 30"
  },
  {
    id: 42,
    name: "Inception",
    age: "230",
    year: "2010",
    number: "9658741252",
    location: "Shimla",
    createdAt: "June 5"
  },
  {
    id: 43,
    name: "The Dark Knight",
    age: "235",
    year: "2008",
    number: "5874123701",
    location: "Srinagar",
    createdAt: "July 10"
  },
  {
    id: 44,
    name: "Pulp Fiction",
    age: "240",
    year: "1994",
    number: "7012589649",
    location: "Gangtok",
    createdAt: "August 15"
  },
  {
    id: 45,
    name: "The Godfather",
    age: "245",
    year: "1972",
    number: "6354789670",
    location: "Itanagar",
    createdAt: "September 20"
  },
  {
    id: 46,
    name: "Forrest Gump",
    age: "250",
    year: "1994",
    number: "9658741254",
    location: "Dispur",
    createdAt: "October 25"
  },
  {
    id: 47,
    name: "The Lord of the Rings",
    age: "255",
    year: "2001",
    number: "5874123703",
    location: "Guwahati",
    createdAt: "November 30"
  },
  {
    id: 48,
    name: "The Matrix",
    age: "260",
    year: "1999",
    number: "7012589651",
    location: "Patna",
    createdAt: "December 5"
  },
  {
    id: 49,
    name: "Inception",
    age: "265",
    year: "2010",
    number: "6354789672",
    location: "Ranchi",
    createdAt: "January 10"
  },
  {
    id: 50,
    name: "The Dark Knight",
    age: "270",
    year: "2008",
    number: "9658741256",
    location: "Raipur",
    createdAt: "February 15"
  }
];

const paginationRowsPerPageOptions = [10, 20];

function App() {
  const [filteredText, setFilteredText] = useState("");

  const filteredData = data
    .filter(
      (items) =>
        (items.name &&
          items.name.toLowerCase().includes(filteredText.toLowerCase())) ||
        (items.createdAt &&
          items.createdAt.toLowerCase().includes(filteredText.toLowerCase()))
    )
    .map((user) => ({
      id: user.id,
      name: user.name,
      age: user.age,
      year: user.year,
      number: user.number,
      location: user.location,
      createdAt: user.createdAt
    }));

  const handleClear = () => {
    if (filteredText) {
      setFilteredText("");
    }
  };

  return (
    <div className="App">
      <div className="dataTableContainer">
        <h1>Demo project with Reactjs & Nodejs</h1>
        <p className="description">
          I've developed a basic project with react-data-table-component and
          postgres as database
          <br />
          This is an example of how to sort and filter the table by any column.
        </p>
        <div className="datatable">
          <input
            className=""
            type="input"
            onChange={(e) => {
              setFilteredText(e.target.value);
            }}
            value={filteredText}
            placeholder="Enter Name or Date"
          />
          <button onClick={handleClear}>Clear</button>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            paginationPerPage="10"
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            paginationDefaultPage="1"
            paginationResetDefaultPage="true"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
