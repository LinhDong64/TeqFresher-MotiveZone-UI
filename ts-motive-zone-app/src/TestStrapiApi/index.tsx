import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TextStrapiApi() {
  const [jwtToken, setJwtToken] = useState('');
  const baseUrl = 'http://localhost:1337';

  async function getToken() {
    const { data } = await axios.post(`${baseUrl}/auth/local`, {
      identifier: 'reader@strapi.io',
      password: 'strapi',
    });

    console.log(data);
    
    setJwtToken(data.jwt);
  }

  async function getArticles() {
    const { data } = await axios.get(`${baseUrl}/articles`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
    
    console.log(data);
    
  }

  useEffect(() => {
    
  }, []);

  return (
    <div style = {styles.container}>
      <button onClick={getToken}>Click to get token</button>
      <div>Token: {jwtToken || 'nothing'}</div>
      {jwtToken && <button onClick={getArticles}>Click to get Articles</button>}
    </div>
  )
}

const styles ={
  container:{
    margin: '30px'
  }
}