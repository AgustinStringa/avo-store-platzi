import Link from "next/link";
import React, { useContext } from "react";
import { AvoContext } from "@pages/context/AvoContext";
import { BsTwitter, BsGithub } from "react-icons/bs";
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
        @media (min-width: 768px) {
          .site-footer nav {
            display: grid;
            grid-template-rows: 150px 50px;
            grid-template-columns: 100%;
            grid-template-areas:
              "links"
              "credits";
          }
        }
        .site-footer nav ul {
          list-style: none;
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
          margin-bottom: 0.7rem;
        }
        .site-footer nav div {
          grid-area: credits;
        }
        .site-footer nav ul li:nth-child(1) {
          grid-area: nosotros;
        }
        .site-footer nav ul li:nth-child(2) {
          grid-area: servicios;
        }
        .site-footer nav ul li:nth-child(3) {
          grid-area: hecho-para;
        }
        .site-footer nav ul li a,
        .credits a {
          color: var(--color-link);
        }

        .made-for > div,
        .made-for > div div {
          display: flex;
          justify-content: flex-start;
          gap: 1rem;
          align-items: center;
        }
        .made-for > div {
          margin-top: 1rem;
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
          margin: 0 0.2rem;
        }
      `}</style>
      <div className="footer-box">
        <footer className="site-footer container">
          <nav>
            <ul>
              <li>
                <h2>Nosotros</h2>

                <Link href="/about" legacyBehavior>
                  <a>Conoce más</a>
                </Link>
              </li>
              <li>
                <h2>Servicios</h2>
                <Link legacyBehavior href="/">
                  <a>Todos los productos</a>
                </Link>
              </li>
              <li className="made-for">
                <h2>Hecho para</h2>
                <p>
                  <a href="https://platzi.com/" target="_blank">
                    Curso de Nextjs de Platzi
                  </a>
                  <span> dictado por </span>
                  <a href="https://twitter.com/jonalvarezz" target="_blank">
                    @jonalvarezz
                  </a>
                </p>
                <div>
                  <div>
                    <BsTwitter />
                    <a href="https://twitter.com/jonalvarezz" target="_blank">
                      Twitter
                    </a>
                  </div>
                  <div>
                    <BsGithub />
                    <a
                      href="https://github.com/jonalvarezz/platzi-nextjs"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <p className="credits">
                Icons made by
                <a
                  target="_blank"
                  href="https://react-icons.github.io/react-icons"
                >
                  React Icons
                </a>
              </p>
              <p className="credits">
                <span> Avocado images taken from</span>
                <a
                  href="https://californiaavocado.com/avocado101/avocado-varieties/"
                  target="_blank"
                >
                  Avocado 101
                </a>
                <span>at</span>
                <a href="https://californiaavocado.com/" target="_blank">
                  California Avocado
                </a>
              </p>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
