import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import Top from "./components/Top"
import Bottom from "./components/Bottom"
import {Badge} from 'reactstrap';

function App() {

const [data, setData] = useState({})
const[date, setdate] = useState('2020-03-19')

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=kvBfn9rGqgVCTavQzovEgnYLN8qCXHB9mZXgMK1z&date=${date}`)
  .then(response => {
      console.log(response);
      setData(response.data)
  })
}, [date]);

console.log(data)
return (
  <div className="App">
    <Top title={data.title}date={data.date}/> {/* We're passing title into Top and destructuring the prop as simply title so we don't need props.title*/}
    <Bottom img={data.url}explanation={data.explanation}/> {/* We're passing img into bottom and destructuring the prop as simply title so we don't need props.img or explanation*/}
  </div>
  );
}
export default App;
