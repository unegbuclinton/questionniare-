import React from 'react';
import axios from "axios";

function App() {
  const value = 'World';
  axios.get('api/GetQuestionnaire').then((res)=>{
    console.log(res.data,"my data");
  });
  return <div>Hello {value}</div>;
}

export default App;
