import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import axios from 'axios';
import './styles.scss';

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('https://api.spacexdata.com/v4/launches/past')
      .then(result => {
        setIsLoaded(true);
        
        if (!result) throw new Error('Data not loaded....');

        const data = result.data.slice(0,6).map(x => {
          return { name: x.name, details: x.details? x.details.slice(0,100):null };
        });
        setData(data);
      })
      .catch(error => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (!isLoaded) return <span>Loading.....</span>

  if (error) return <span>{error.message}</span>
 
  return (
    <div className="landing-page">
      {data.map((item, id) => (
        <Card key={id} data={item} />
      ))}
    </div>
  )
}

export default LandingPage;
