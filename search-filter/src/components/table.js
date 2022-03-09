import React, { useState, useEffect } from "react";
import axios from 'axios';

const Table = () => {

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const ele = [{
    'nom': 'herman',
    'age': 15,
    'profession': 'etudiant'
  }, {
    'nom': 'elia',
    'age': 5,
    'profession': 'eleve'
  }, {
    'nom': 'michel',
    'age': 6,
    'profession': 'policier'
  }, {
    'nom': 'ALex',
    'age': 88,
    'profession': 'etudiant'
  }, {
    'nom': 'william',
    'age': 1,
    'profession': 'banquier'
  }, {
    'nom': 'alphonse',
    'age': 15,
    'profession': 'journaliste'
  },];
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums/1/photos')

      .then(response => {
        console.log(response.data.value)
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  },
    []);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data)=>{
      return data.title.search(value) != -1
    });
    setFilteredData(result)
  }

  const styles = {
    display: 'inline', 
    width: '30%', 
    height: 50, 
    float: 'left', 
    padding: 5, 
    border: '0.5px solid black', 
    marginBottom: 10,
    marginRight: 10
  }

  return (
      <div className="App">
           <h1 style={{ fontSize:'80px' , fontWeight:'bold' , textAlign:'center'} }>Simple Filter </h1>
        <div style={{ margin: '0 auto', marginTop: '10%',marginBottom:'2%' ,textAlign:'center'}}>
          <label htmlFor="search"> Search</label>
          <input type="text" style={{backgroundColor:'gray' , color:'white' ,height:"10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     %"}} onChange={(e) => handleSearch(e)} />
        </div>

        <div style={{ padding: '10' , marginLeft : '10%'}}>
          {filteredData.map((value, index) => {
            return (
              <div key={value.id}>
                <div style={styles}>
                  {value.title}

                </div>
              </div>
            )
          })}
        </div>
      </div>


  )
}

export default Table;