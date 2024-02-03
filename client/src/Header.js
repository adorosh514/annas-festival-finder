import { useEffect } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Header() {
  return (
    <div>
      Anna's Festival Finder
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default Header;
