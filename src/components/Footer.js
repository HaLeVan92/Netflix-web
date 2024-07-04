import React from 'react'

function Footer() {
  return (

    <div className='footer'>
        <div className='footer-content'>            
            <div className='footer-content-logo'>
            
                      <img src="https://duy-movie-app.netlify.app/static/media/netflixlogo.ce3078b4cc1d1d95414a.png"  alt="Netflix Logo" className="navLogo" />
                    
            </div>
            <div className='footer-content-menus'>
                <div className='footer-menu'>
                    <a className='textMenu' href='/'>Home</a>
                    <a className='textMenu' href='/'>Contact us</a>
                    <a className='textMenu' href='/'>Term of servieces</a>
                    <a className='textMenu' href='/'>About us</a>
                </div>
                <div className='footer-menu'>
                    <a className='textMenu' href='/'>Live</a>
                    <a className='textMenu' href='/'>FAQ</a>
                    <a className='textMenu' href='/'>Premium</a>
                    <a className='textMenu' href='/'>Privacy policy</a>
                </div>
                <div className='footer-menu'>
                    <a className='textMenu' href='/'>Must watch</a>
                    <a className='textMenu' href='/'>Recent release</a>
                    <a className='textMenu' href='/'>Top IMDB</a>
                    
                </div>
            </div>
        </div>
        <div className='footer-signature'>
            <p>@2024 Made in ❤ by Ha Le</p>
        </div>
    </div>

  )
}

export default Footer;

