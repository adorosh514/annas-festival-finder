import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { useState } from 'react';

function UserProfile() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [profile, setProfile] = useState([]);

  return (
    <Wrapper>
      <AvatrImg src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png" />
      <ProfileDiv>
        <UsernameDiv>
          <TitleH1>Username:</TitleH1>
          <ValueH2>Banana</ValueH2>
        </UsernameDiv>
        <EmailDiv>
          <TitleH1>Email:</TitleH1>
          <ValueH2>{user?.email}</ValueH2>
        </EmailDiv>
      </ProfileDiv>
    </Wrapper>
  );
}

const ProfileDiv = styled.div``;

const TitleH1 = styled.h1`
  margin: 0;
`;

const ValueH2 = styled.h2`
  margin: 0;
`;

const UsernameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;

const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: lightpink;
  gap: 1%;
`;

const AvatrImg = styled.img`
  display: flex;
  justify-content: center;
  width: 30%;
`;
export default UserProfile;
