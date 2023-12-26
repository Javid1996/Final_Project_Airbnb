import React from "react";
import "../Styles/Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { useEffect, useState } from "react";
// import Login from './SignIn'
import axios from "axios";
import CardDetails from "./CardDetails";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import Header from './Header';


function Home() {
  const [data, setData] = useState([]);


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
    
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   const url = "http://localhost:4005/cards/";
  
  //   async function fetchData(inputValue) {
  //     try {
  //       let response;
  //       if (!inputValue || inputValue === "") {
  //         response = await fetch(url, { method: 'GET' });
  //       } else {
  //         response = await axios.get(`http://localhost:4005/places/${inputValue}`);
  //       }
        
  //       const respjs = await response.json();
  //       setData(respjs);
  //       console.log('response', respjs);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  
  //   fetchData();
  // }, [inputValue]);
 
  const handleInputChange = (inputValue) =>{
    const url = "http://localhost:4005/cards/";
    try{
      if (!inputValue || inputValue === "") {
        axios.get(url)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  
      }else{console.log('INPUTVALUE ------->',inputValue);
      axios.get(`http://localhost:4005/places/${inputValue}`)
      .then(response => {
        console.log(response.data);
        setData(response.data)
      })}
    }catch(err) {
        console.log(err)
    }
  
    setData(inputValue)
 }
 console.log('last data',data);

  return (
    <div className="home">
      
      <Header onChange={handleInputChange}/>
      <Banner />

      {/* <Login/> */}

      {/* <div className="home_section">
        {data.map((el) => {
          return console.log(el.name);
        })}
      </div> */}
      

      <div className="home_section">
      {Array.isArray(data) ? (
    data.map((el) => <Card key={el.event_id} element={el} />)
  ) : (
    <p>No data available</p>
  )}
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
