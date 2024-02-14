import { useEffect } from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import UserProfile from './UserProfile';
import FestivalPage from './FestivalPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <Wrapper>
      <main>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route
                  path="/festivals/:festivalId"
                  element={<FestivalPage />}
                />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;
