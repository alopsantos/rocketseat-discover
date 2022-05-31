import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const clientId =
  "422758685685-06pct62cu3ec0jqv5dl6uqokj4ercphu.apps.googleusercontent.com";
// import "./styles.css";
export function SignIn() {
  // async function handleGoogleSignIn() {
  //   try {
  //     const CLIENT_ID = process.env.CLIENT_ID;
  //     const REDIRECT_URI = process.env.REDIRECT_URI;
  //     const SCOPE = encodeURI(process.env.SCOPE);
  //     const RESPONSE_TYPE = process.env.RESPONSE_TYPE;

  //     const { type, params } =
  //       await `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

  //     await AuthSession.startAsync({ authUrl });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleFailure = (result) => {
    console.log(result + "handle Failure");
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  const onSuccess = () => {
    console.log("deslogado");
  };

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>anderson</strong>
          {/* <img src={user.avatar} alt="Anderson Lopes" /> */}
        </div>
      </header>

      {/* <GoogleLogin
        clientId={import.meta.env.VITE_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin> */}

      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />

      <GoogleLogout
        clientId={clientId}
        onFailure={handleFailure}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}
