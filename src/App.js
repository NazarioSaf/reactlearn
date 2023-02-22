import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Friends from './components/Friends/Friends';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {

  return (

      <div className='app-wrapper'>
        <Header />
        <Navbar store={props.store} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route exact path='/profile' element={<Profile store={props.store} />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            {/* <Route path='/friends' element={<Friends store={props.store}/>} /> */}
          </Routes>
        </div>
      </div>
 
    );
}
 


export default App;
