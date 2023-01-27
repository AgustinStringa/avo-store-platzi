import React from 'react'

const Header = () => {
  return (
    <>
      <style jsx>{`
        .site-header {
          box-shadow: 24px 2px 2px black;
        }
    `}</style>

      <header className='site-header'>
        <nav>
          <ul>
            <li>
              <a href="/" className='home-link'>
                <svg></svg>
                Avo Store
              </a>
            </li>
            <li>
              <a href="/cart" className='cart-link'>
                <svg></svg>
                Canasta
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header