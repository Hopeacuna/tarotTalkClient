import React, {useState, useEffect} from 'react';
import Nav from './components/site/Nav';
import Auth from './components/UserLogin/Auth';
import RefIndex from './components/ReflectionLog/RefIndex'

function App() {

  const [sessionToken, setSessionToken] = useState('');
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
    
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <RefIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div className="App">
       <Nav clickLogout={clearToken} />
       {protectedViews()}
    </div>
  );
}

export default App;