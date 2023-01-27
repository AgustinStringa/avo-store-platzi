import React from 'react'

const Footer = () => {
    return (
        <>
            <style jsx>{`
            .footer-box {
                box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);
                border: 1px solid rgba(34,36,38,.15);
            }
            .site-footer {
                padding: 2rem 0;
            }
            @media (min-width:768px) {
                
                .site-footer nav {
                    display: grid;
                    grid-template-rows: 150px 50px;
                    grid-template-columns: 100%;
                    grid-template-areas: 
                                        "links"
                                        "credits"
                }
            }
            .site-footer nav ul {
                list-style:none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2.5rem;
            }
            @media (min-width: 768px) {
                .site-footer nav ul {
                    grid-area: links;
                    padding: 0;
                    display: grid;
                    grid-template-columns: 30% 30% 40%;
                    grid-template-areas: "nosotros servicios hecho-para";
                }
            }
            .site-footer nav ul h2 {
                font-weight: bold;
                font-size: 1rem;
                margin-bottom: .7rem;
            }
            .site-footer nav div {
                grid-area: credits;
            }
            .site-footer nav ul li:nth-child(1){
                grid-area: nosotros;
            }
            .site-footer nav ul li:nth-child(2){
                grid-area: servicios;
            }            
            .site-footer nav ul li:nth-child(3){
                grid-area: hecho-para;
            }
            .site-footer nav ul li a,
            .credits a{
                color: var(--color-link);
            }

            .credits {
                color: grey;
                font-size: 14px;
                text-align: left;
                margin: 0 auto;
            }
            @media (min-width: 768px) {
                .credits {
                text-align: center;
                width: 500px;
                }
            }
            .credits a {
             margin: 0 0.2rem ;   
            }
        `}</style>
            <div className="footer-box">
                <footer className='site-footer container'>
                    <nav>
                        <ul>
                            <li>
                                <h2>Nosotros</h2>
                                <a href="">Conoce más</a>
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
                            <p className='credits'>
                                Icons made by
                                <a href="">
                                    Freepik from www.flaticon.com
                                </a>
                            </p>
                            <p className='credits'>
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

            </div>
        </>
    )
}

export default Footer