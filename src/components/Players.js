import { useState, useEffect } from 'react';

function Players() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('http://localhost:5000/players'
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(data)

  const renderPlayer = ( player, index) => {
    return (
      <tr key={index}>
        <td>{ player.name }</td>
        <td>{ player.summonerLevel}</td>
        <td>{ player.accountId }</td>
      </tr>
    )
    // console.log(fighter.images)
  }

  return (
  <div id='table-scroll'>
    <table className='styled-table'>
      <thead >
        <tr>
          <th></th>
          <th>Name</th>
          <th>Level</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
          {data.map(renderPlayer)}
      </tbody>
    </table>
  </div>
  )
}

//  <Table striped className='container'>

export default Players;
