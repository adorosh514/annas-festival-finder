import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import FestivalComponent from './FestivalComponent';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [festivals, setFestivals] = useState([]);
  const [hover, setHover] = useState({
    punk: false,
    jazz: false,
    country: false,
    rock: false,
    metal: false,
    edm: false,
    mixed: false,
  });

  useEffect(() => {
    fetch(`/festivals`)
      .then((res) => res.json())
      .then((data) => setFestivals(data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (isAuthenticated)
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          console.log(response);

          console.log('User added successfully!');
        })
        .catch((error) => {
          console.error('Error adding user:', error.message);
        });
  }, [isAuthenticated]);

  return (
    <FestivalContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, punk: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, punk: false });
        }}>
        <GenreImg src="punk.png" />
        <GenreDiv>Punk/Hardcore</GenreDiv>
        {hover?.punk &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Punk/Hardcore')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, jazz: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, jazz: false });
        }}>
        <GenreImg src="jazz.png" />
        <GenreDiv>Jazz</GenreDiv>
        {hover?.jazz &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Jazz')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, country: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, country: false });
        }}>
        <GenreImg src="country.png" />
        <GenreDiv>Country</GenreDiv>
        {hover?.country &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Country')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, rock: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, rock: false });
        }}>
        <GenreImg src="rock.png" />
        <GenreDiv>Rock</GenreDiv>
        {hover?.rock &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Rock')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, metal: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, metal: false });
        }}>
        <GenreImg src="metal.png" />
        <GenreDiv>Metal</GenreDiv>
        {hover?.metal &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Metal')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, edm: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, edm: false });
        }}>
        <GenreImg src="dj.png" />
        <GenreDiv>EDM</GenreDiv>
        {hover?.edm &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'EDM')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, rap: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, rap: false });
        }}>
        <GenreImg src="rap.png" />
        <GenreDiv>Rap/Hip-Hop</GenreDiv>
        {hover?.rap &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Rap/Hip-Hop')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
      <GenreContainer
        onMouseEnter={() => {
          setHover({ ...hover, mixed: true });
        }}
        onMouseLeave={() => {
          setHover({ ...hover, mixed: false });
        }}>
        <GenreImg src="mixed.png" />
        <GenreDiv>Mixed</GenreDiv>
        {hover?.mixed &&
          festivals.length &&
          festivals
            .filter((e) => e.genre == 'Mixed')
            .map((festival) => {
              return (
                <FestivalList to={`/festivals/${festival._id}`}>
                  <div>{festival.name}</div>
                </FestivalList>
              );
            })}
      </GenreContainer>
    </FestivalContainer>
  );
}

const FestivalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
`;

const GenreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 125px;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const GenreImg = styled.img`
  display: flex;
`;

const FestivalList = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
`;

const GenreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export default LandingPage;
