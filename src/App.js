import React, {useState, useEffect} from 'react';
import Nav from './components/site/Nav';
import Auth from './components/UserLogin/Auth';
import RefIndex from './components/ReflectionLog/RefIndex';
import CardIndex from './components/Cards/CardIndex';
import ShowCards from './components/Cards/Tarotdraw';

function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [sessionUserId, setSessionUserId] = useState('');
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

  const updateUserId = (newUserId) => {
    localStorage.setItem('userId', newUserId);
    setSessionUserId(newUserId);
    console.log(sessionUserId);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <RefIndex token={sessionToken}/>
    // <CardIndex token={sessionToken}/>

    : <Auth updateToken={ updateToken} updateUserId={ updateUserId}/>)
  }

  const anotherProtectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
    
    // <RefIndex token={sessionToken}/>


    <CardIndex token={sessionToken}/>

    : <Auth updateToken={ updateToken} updateUserId={ updateUserId}/>)
  }

  return (
    <div className="App">
       <Nav clickLogout={clearToken} />
       {protectedViews()}
       {anotherProtectedViews()}
    </div>
  );
}

export default App;