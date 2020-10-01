import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  // let friendsElement = props.state.friends.map( f => <NavbarItem name={f.name} id={f.id}/> );

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.active}>Massage</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                {/* <div className={s.friendsItems}>
                  { friendsElement }
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar;
