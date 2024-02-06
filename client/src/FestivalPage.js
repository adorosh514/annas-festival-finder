import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function FestivalPage() {
  const [festival, setFestival] = useState();
  const [rating, setRating] = useState();
  const { festivalId } = useParams();
  useEffect(() => {
    fetch(`/festivals/${festivalId}`)
      .then((res) => res.json())
      .then((data) => setFestival(data.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/rating', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: rating }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/festivals/${festivalId}`);
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  console.log(rating);
  console.log(festival);
  return (
    <div>
      <text>{festival?.name}</text>
      <text>{festival?.genre}</text>
      <text>{festival?.location}</text>
      <Input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <RatingButton>Add Rating</RatingButton>
    </div>
  );
}

const Input = styled.input`
  max-width: 100%;
  height: auto;
`;

const RatingButton = styled.button`
  max-width: 100%;
  height: auto;
`;

export default FestivalPage;
