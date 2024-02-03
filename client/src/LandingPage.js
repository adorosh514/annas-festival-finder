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
        // Adjust the URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          console.log(response);

          // Handle successful response, if needed
          console.log('User added successfully!');
        })
        .catch((error) => {
          // Handle errors
          console.error('Error adding user:', error.message);
        });
  }, [isAuthenticated]);

  return (
    <Wrapper>
      {/* <FestivalComponent /> */}
      <FestivalContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, punk: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, punk: false });
            }}>
            Punk/Hardcore
          </GenreDiv>
          {hover?.punk &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Mixed')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, jazz: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, jazz: false });
            }}>
            Jazz
          </GenreDiv>
          {hover?.jazz &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Jazz')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, country: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, country: false });
            }}>
            Country
          </GenreDiv>
          {hover?.country &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Country')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, rock: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, rock: false });
            }}>
            Rock
          </GenreDiv>
          {hover?.rock &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Rock')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, metal: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, metal: false });
            }}>
            Metal
          </GenreDiv>
          {hover?.metal &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Metal')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, edm: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, edm: false });
            }}>
            EDM
          </GenreDiv>
          {hover?.edm &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'EDM')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, rap: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, rap: false });
            }}>
            Rap/Hip-Hop
          </GenreDiv>
          {hover?.rap &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Rap/Hip-Hop')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
        <GenreContainer>
          <GenreDiv
            onMouseEnter={() => {
              setHover({ ...hover, mixed: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, mixed: false });
            }}>
            Mixed
          </GenreDiv>
          {hover?.mixed &&
            festivals.length &&
            festivals
              .filter((e) => e.genre == 'Mixed')
              .map((festival) => {
                return (
                  <FestivalList to={`/festivals/${festival.name}`}>
                    <div>{festival.name}</div>
                  </FestivalList>
                );
              })}
        </GenreContainer>
      </FestivalContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: pink;
`;

const GenreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: yellow;
  width: 100px;
  margin-bottom: 5px;
`;

const FestivalList = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: green;
  width: 100px;
`;

const GenreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: red;
  margin: 5px;
  width: 100px;
  height: 300px;
`;

const FestivalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: lightblue;
`;

export default LandingPage;
