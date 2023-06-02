import React, {useState,useEffect} from 'react';
import './WeatherandNews.css'
import axios from 'axios';
import img from '../Assets/image14.png'

function WeatherandNews() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const [weatherData, setWeatherData] =useState(null);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [myData, setMyData] = useState(null);
  const [catData, setCatData]=useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('RegistrationFormData');
    const categoryData=localStorage.getItem('categoryItems');

    if (storedData || categoryData) {
      const parsedData = JSON.parse(storedData);
      setMyData(parsedData);
      const catFinalData=JSON.parse(categoryData);
      setCatData(catFinalData);
    }
  }, []);
  const fetchWeatherData=async()=>{
    const API_KEY='1baf99a2e9b14d789df73424232905';
    const city='Bangalore';
    const url=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    try{
      const response=await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    }
    catch(error){
      setError("error fetching weather data");
    }
  }
  useEffect(()=>{fetchWeatherData();},[]);
  
  if(error){
    return <p>error</p>
  }
  if(!weatherData){
    <p>Loading</p>
  }
  return (
    <div className="main-container-w ">
      <div className="first-container-w">
        <div className="details-card-w">
          <div className="img-w">
            <img src={img} alt="" height={350}/>
          </div>
          <div className="rest-w" style={{width:'50%',display:'flex',flexDirection:'column', color:'white', fontFamily:'DM Sans',flexWrap:'wrap',  overflow:'auto'}}>
            <div>
              {myData&&<p style={{fontSize:'1.6rem', margin:'1rem'}}>{myData.Name}</p>}
              {myData&&<p style={{fontSize:'1.6rem', margin:'1rem'}}>{myData.Email}</p>}
              {myData&&<h1 style={{margin:'1rem'}}>{myData.UserName}</h1>}
            </div>
            
            <div className="cats-w" style={{marginTop:'1rem',maxHeight: '180px',}}>
              {catData&& catData.map((cat,index)=>(
                <button style={{backgroundColor:'#9F94FF', border:'none', borderRadius:'2rem', width:'9rem', height:'2.5rem',fontSize:'1.2rem', color:'white', textAlign:'left', paddingLeft:'1.3rem', marginBottom:'1rem', marginRight:'1rem'}} key={index}>{cat}</button>
              ))}
              
            </div>
          </div>
        </div>
        <div className="weather-card-w" style={{color:'white', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', fontFamily:'DM Sans', fontSize:'1.8rem', justifyContent:'space-around', fontWeight:'600', height:'4rem', alignItems:'center' , backgroundColor:'white', borderTopLeftRadius:'2rem', borderTopRightRadius:'2rem'}}>
            <p style={{textAlign:'center', margin:'0'}}>{month}-{day}-{year}</p>
            <p style={{textAlign:'center', margin:'0'}}>{hours}:{minutes}:{seconds}</p>
          </div>
          <div style={{display:'flex'}}>
            {weatherData && (
              <>
               {weatherData.current.condition.text}
               {weatherData.current.temp_c}
              </>
            )}
          </div>
          
        </div>
      </div>
      <div className="second-container-w">
         <div className="news-card-w">
            hey
         </div>     
      </div>
    </div>
  );
}

export default WeatherandNews