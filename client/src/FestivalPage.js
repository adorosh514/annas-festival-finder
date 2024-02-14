import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

function FestivalPage() {
  const [festival, setFestival] = useState();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const [rating, setRating] = useState();
  const { festivalId } = useParams();
  const refresh = () => {
    fetch(`/festivals/${festivalId}`)
      .then((res) => res.json())
      .then((data) => {
        setFestival(data.data);
      });
  };
  useEffect(() => {
    refresh();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/rating', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: rating,
        name: festival?.name,
        user: user?.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refresh();
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`/festivals/${festivalId}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: rating,
        name: festival?.name,
        user: user?.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refresh();
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`/festivals/${festivalId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: rating,
        name: festival?.name,
        user: user?.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refresh();
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  console.log(rating);
  console.log(festival);
  return (
    <Wrapper>
      <FestivalDiv>
        <FestImg src="/festival.jpg" />
        <FestivalInput>
          <FestInfoDiv>
            <h1>{festival?.name}</h1>
            <h1>{festival?.genre}</h1>
            <h1>{festival?.location}</h1>
          </FestInfoDiv>
          <RatingDiv>
            <Input
              type="number"
              placeholder="1-5"
              min="0"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
            {festival?.ratings.filter((r) => r.user == user?.email).length <=
              0 || !isAuthenticated ? (
              <RatingButton disabled={!isAuthenticated} onClick={handleSubmit}>
                Add Rating
              </RatingButton>
            ) : (
              <RatingButton onClick={handleUpdate}>Edit Rating</RatingButton>
            )}
            {festival?.ratings.map((r) => {
              return (
                <RatingInput>
                  <h1>{r.user}</h1>
                  <Rating initialValue={r.rating} />
                  <button
                    disabled={!isAuthenticated || r.user != user?.email}
                    onClick={handleDelete}>
                    Delete Rating
                  </button>
                </RatingInput>
              );
            })}
          </RatingDiv>
        </FestivalInput>
      </FestivalDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const FestivalDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
`;

const FestImg = styled.img`
  width: 50%;
`;

const FestInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FestivalInput = styled.div``;

const RatingDiv = styled.div`
  display: flex;
  gap: 1%;
  justify-content: center;
`;

const RatingInput = styled.div`
  display: flex;
`;

const Input = styled.input`
  max-width: 100%;
  height: auto;
`;

const RatingButton = styled.button`
  max-width: 100%;
  height: auto;
`;

export default FestivalPage;
