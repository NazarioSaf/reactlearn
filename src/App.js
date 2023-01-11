import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Friends from './components/Friends/Friends';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sideBar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs 
           dialogPage={props.state.dialogPage}
           addMessage={props.addMessage}
           updateNewMessageText={props.updateNewMessageText} 
            />} />
            <Route exact path='/profile' element={<Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends state={props.state.sideBar}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}
 


export default App;
