import { useEffect } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImg src="/logo.png" atl="logo" />
        </Link>
      </LogoContainer>
      <h1>Festival Finder</h1>
      <HeaderEndDiv>
        <ProfileIconContainer>
          <Link to="/profile">
            <AvatarImg src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png" />
          </Link>
        </ProfileIconContainer>
        <LoginButton />
        <LogoutButton />
      </HeaderEndDiv>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-inline: 10px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
`;

const LogoContainer = styled.div``;

const LogoImg = styled.img`
  width: 200px;
  object-fit: contain;
`;

const HeaderEndDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 5px;
  margin: 10px;
`;

const ProfileIconContainer = styled.div`
  max-width: 100px;
`;

const AvatarImg = styled.img`
  display: flex;
  justify-content: center;
  width: 60px;
`;

const ProfileButton = styled(Link)`
  max-width: 100px;
`;

export default Header;
