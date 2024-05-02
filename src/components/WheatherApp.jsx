import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoCloseCircleOutline, IoLocation } from "react-icons/io5";




const wheatherKey=import.meta.env.VITE_WEATHERKEY;

const logoOpenWeather ='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png';

const WheatherApp = () => {
    const [city, setCity] = useState('');
    const [errorCity, setErrorCity] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    
  
    const fetchWeatherData = async (latitude, longitude) => {
        const urlUbi =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${wheatherKey}`;
        const urlCity =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${wheatherKey}`;
        //      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      try {
        if(city!==''){
          //console.log('latitude:', latitude, 'longitude:', longitude);  
        }
        const response = await fetch(city ? urlCity : urlUbi);
        const data = await response.json();
        //console.log('data wheather:...',data);
        if (data.cod === '404'||data.cod === '400') {
          setErrorCity(true);
          setLoading(false);
          return;
        } else{
          setErrorCity(false);
        }
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    const handleLocation = () => {
      setLoading(true);
      setCity('');
      setErrorCity(false);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          //console.log('latitude:', latitude, 'longitude:', longitude);
          fetchWeatherData(latitude, longitude);
        }, (error) => {
          console.error('Error getting user location:', error);
          setLoading(false);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      fetchWeatherData(city);
    };
  
    useEffect(() => {
      handleLocation(); // Fetch weather data based on user's current location on component mount
    }, []);
  
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1 className="text-center mb-4">Weather App</h1>
            <Button variant="outline-secondary" onClick={handleLocation} disabled={loading}>
                <IoLocation />
              {loading ? 'Loading...' : 'Use Current Location'}
            </Button>
            <Form className="mt-3 " onSubmit={handleSubmit}>
              <Form.Group className='d-flex gap-2' controlId="city">
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={loading}
                />
                <div className='btn btn-outline-info' onClick={() => setCity('')}>
                    <IoCloseCircleOutline  />
                </div>
              </Form.Group>
              
              <Button variant={(loading||city==='')?"dark":"outline-success"} type="submit" className='mt-2'  disabled={loading||city===''}>
                {loading ? 'Loading...' : 'Get Weather'}
              </Button>
            </Form>
            {errorCity && (
              <p className="text-danger mt-3">City not found</p>
            )}
            {weatherData&&!errorCity && (
              <div className="my-4">
                <h2>{weatherData?.name}, {weatherData?.sys?.country}</h2>
                {weatherData?.weather?.length > 0 && (
                    <p>Description: {weatherData?.weather[0]?.description}</p>
                )
                    }
                
                <p>Temperature: {((weatherData?.main?.temp)-273.15).toFixed(3)} °C</p>
                <p>Feels like: {((weatherData?.main?.feels_like)-273.15).toFixed(3)} °C</p>
                <p>Humidity: {weatherData?.main?.humidity}%</p>
                <div className=''>
                <img className='bg-dark p-2 rounded' style={{width:'100px'}} src={logoOpenWeather} alt="logoOpenWeather" />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
}

export default WheatherApp