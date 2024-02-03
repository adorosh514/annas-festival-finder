import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { useState } from 'react';

function UserProfile() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (isAuthenticated)
      fetch(`/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setProfile(data.data))
        .catch((e) => console.log(e));
  }, [isAuthenticated]);

  // console.log(profile);

  return (
    <Wrapper>
      <img />
      <div>
        <text>Username</text>
        <h1>Anna</h1>
        <text>Location</text>
        <input></input>
        <div>
          <h1>Shambhala Music Festival</h1>
          <text>Ratings</text>
          <input></input>
          <text>Comments</text>
          <input></input>
        </div>
      </div>
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

export default UserProfile;
