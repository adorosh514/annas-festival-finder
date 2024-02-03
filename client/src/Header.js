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
      <ProfileIconContainer>
        <Link to="/">
          <LogoImg src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png" />
        </Link>
      </ProfileIconContainer>
      <LoginButton />
      <LogoutButton />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: #f0f0f0;
`;

const LogoContainer = styled.div`
  max-width: 100px;
`;

const ProfileIconContainer = styled.div`
  max-width: 100px;
`;
const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Header;
