import React from 'react'
import Button from '@mui/material/Button';
import SearchMovies from '../pages/SearchMovies';


const Header = () => {


    return(
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">

                    <a className="navbarBrand" href="/">
                     {/* eslint-disable-next-line */}
                      <img src="https://duy-movie-app.netlify.app/static/media/netflixlogo.ce3078b4cc1d1d95414a.png"  alt="Netflix Logo" className="navLogo" />
                    </a>

                    <SearchMovies/>

                    
                    <div className="navBar">
                        
                        <div className='genresList'>
                            <a className="genres" href="/">Now-playing</a>
                            <a className="genres" href="/">Popular</a>
                            <a className="genres" href="/">Top-rate</a>
                            <a className="genres" href="/">Upcoming</a>
                        </div>

                        <Button variant="contained">Sign in</Button>

                        
                        {/* <from className="dFlex" role="search">
                            <select>
                                <option> English </option>
                                <option> VietNam </option>
                            </select>
                            <Button variant="contained">Sign in</Button>
                        </from> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;