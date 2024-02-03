import { useEffect } from 'react';
import styled from 'styled-components';

function FestivalPage() {
  useEffect(() => {
    fetch(`/festivals`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // const Festivals
  // return (
  // 		<>
  // 		{festivals.map((festival))}
  // );

  //req.params to match festival data to be printed
}

export default FestivalPage;
