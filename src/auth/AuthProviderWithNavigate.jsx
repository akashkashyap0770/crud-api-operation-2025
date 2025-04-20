import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function AuthProviderWithNavigate({ children }) {

  const navigate = useNavigate();

  const domain = "dev-y2r1smk3mzqinrzu.us.auth0.com";
  const clientId = "HJfiW6TWccP0OiQf9ih1rmzYfeDqcVS0";

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/dashboard");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        // redirect_uri: window.location.origin,
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProviderWithNavigate;
