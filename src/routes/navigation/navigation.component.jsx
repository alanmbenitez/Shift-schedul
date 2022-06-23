import React ,{ Fragment } from "react";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as UpagedLogo } from '../../assets/logo-upaged.svg'

import './navigation.styles.scss'

const Navigation = () => {
   

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <UpagedLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/'>
                        Find Work
                    </Link>
                    <Link className="nav-link" to='/shop'>
                        Timesheets
                    </Link>
                    <Link className="nav-link" to='/auth'>
                        Messaging
                    </Link>
                </div>
               
                    <Link className="nav-link-log" to='/auth'>
                      <img className="img-user" src="https://cdn-icons-png.flaticon.com/512/272/272075.png" alt=""/>
                      <span className="log">Log Out</span>
                    </Link>
                
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;