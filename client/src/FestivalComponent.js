import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

function FestivalComponent() {
  const [festivals, setFestivals] = useState([]);
  useEffect(() => {
    fetch(`/festivals`)
      .then((res) => res.json())
      .then((data) => setFestivals(data.data));
  }, []);

  return (
    <>
      {festivals.length ? (
        festivals.map((festival) => {
          return (
            <div>
              <h1>{festival.name}</h1>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default FestivalComponent;
