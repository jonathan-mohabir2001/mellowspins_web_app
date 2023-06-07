import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

function MixesPage() {
  const [mixes, setMixes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/mixes')
      .then((response) => {
        setMixes(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>Mixes</h1>
      {mixes.map((mix) => (
        <div key={mix}>
          <ReactPlayer url={mix} controls={true} />
        </div>
      ))}
    </div>
  );
}

export default MixesPage;
