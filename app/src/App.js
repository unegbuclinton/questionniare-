import React from 'react';
import axios from "axios";

function App() {
  const value = 'World';
  axios.get('https://calm-smoke-0cbb30f00.2.azurestaticapps.net/api/GetQuestionnaire').then((res)=>{
    console.log(res.data,"my data");
  });
  return <div>Hello {value}</div>;
}

export default App;
