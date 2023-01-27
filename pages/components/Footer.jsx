import React from 'react'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <nav>
                <ul>
                    <li>
                        <h2>Nosotros</h2>
                        <a href="">conoce más</a>
                    </li>
                    <li>
                        <h2>Servicios</h2>
                        <a href="">Todos los productos</a>
                    </li>
                    <li>
                        <h2>Hecho para</h2>
                        <p>
                            <a href="">Curso de Nextjs de Platzi</a> dictado por <a href="">@jonalvarezz</a>
                        </p>
                        <div>
                            <a href="">ico - Twitter</a>
                            <a href="">ico - Github</a>
                        </div>
                    </li>
                </ul>
                <div>
                    <p>
                        Icons made by <a href="">
                            Freepik from www.flaticon.com
                        </a>
                        Avocado images taken from
                        <a href="">
                            Avocado 101
                        </a>
                        at
                        <a href="">
                            California Avocado
                        </a>
                    </p>
                </div>
            </nav>
        </footer>
    )
}

export default Footer