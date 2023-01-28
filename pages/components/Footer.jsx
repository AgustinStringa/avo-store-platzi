import Link from 'next/link'
import React, { useContext } from 'react'
import { AvoContext } from '@pages/context/AvoContext'
const Footer = () => {
    return (
        <>
            <style jsx>{`
            .footer-box {
                box-shadow: 0px -4px 4px rgb(0 0 0 / 5%);
                /* border: 1px solid rgba(34,36,38,.15); */
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

                                <Link href="" legacyBehavior>
                                    <a>
                                        Conoce más
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <h2>Servicios</h2>
                                <Link legacyBehavior href="">
                                    <a >Todos los productos</a>
                                </Link>
                            </li>
                            <li>
                                <h2>Hecho para</h2>
                                <p>
                                    <Link legacyBehavior href="">
                                        <a href="">Curso de Nextjs de Platzi  dictado por</a>
                                    </Link>
                                    <Link legacyBehavior href="">
                                        <a href="">@jonalvarezz</a>
                                    </Link>
                                </p>
                                <div>
                                    <Link href="" legacyBehavior>
                                        <a >ico - Twitter</a>

                                    </Link>
                                    <Link href="" legacyBehavior>
                                        <a >ico - Github</a>

                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <p className='credits'>
                                Icons made by
                                <Link href="" legacyBehavior>
                                    <a href="">
                                        Freepik from www.flaticon.com
                                    </a>
                                </Link>
                            </p>
                            <p className='credits'>
                                Avocado images taken from
                                <Link legacyBehavior href="">
                                    <a >
                                        Avocado 101
                                    </a>
                                </Link>
                                at
                                <Link legacyBehavior href="">
                                    <a href="">
                                        California Avocado
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </nav>
                </footer>

            </div>
        </>
    )
}

export default Footer