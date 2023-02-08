import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsBar from '../Friends/FriendBar/FriendsBar';
import s from './Navbar.module.css';

const Navbar = (props) => {
  // let friendElements = state.name.map(f => <FriendsBar name={f.name} />)

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>

      {/* <div className={`${s.item} ${s.friends}`}>
        <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
             </div>
             <div>{(friendElements)}</div>  */}

         </nav>);
}

export default Navbar;