import React from "react";
import "../Styles/Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { useEffect, useState } from "react";
// import Login from './Login'
import axios from "axios";
import CardDetails from "./CardDetails";
import { useNavigate } from "react-router";

function Home() {
  const [data, setData] = useState([]);
//   const navigate = useNavigate()

  useEffect(() => {
    const url = "http://localhost:4005/cards/";


    async function fetchData() {
      try {
      const response = await fetch(url,{method:'GET'});
      const respjs = await response.json();
      setData(respjs);
      console.log('response',respjs);
      } catch (err) {
      console.log(err);
      }
    //   try {
    //     const { data } = axios.get(url, { mode: "no-cors" });

    //     console.log(data);
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    }
    fetchData();
  }, []);
  // console.log(data);

  return (
    <div className="home">
      <Banner />

      {/* <Login/> */}

      {/* <div className="home_section">
        {data.map((el) => {
          return console.log(el.name);
        })}
      </div> */}

      <div className="home_section">
        {data.map((el) => {
          return ( <Card  key={el.event_id} element={el} />)
        })}
      </div>
    </div>
  );
}

export default Home;
