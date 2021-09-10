import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    console.log("useToken - getToken");
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    console.log("useToken - saveToken ", userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}