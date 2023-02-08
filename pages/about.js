import React from 'react'
import Image from 'next/image'
const about = () => {
    return (
        <>
            <style jsx>{`
                .main-title {
                    text-align: center;
                    margin: 2rem auto;
                }
                figure{
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                figcaption {
                    color: grey;
                }
                figcaption a {
                    color: var(--color-link);
                }
                .facts-grid {
                    counter-reset: orderedlist;
                    list-style: none;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(1,1fr);
                    grid-template-rows: repeat(5,1fr);
                    gap: 2rem;
                    padding: 0;
                    flex-wrap: wrap;
                }
                @media (min-width: 768px) {
                    .facts-grid {
                        grid-template-columns: repeat(2,1fr);
                        grid-template-rows: repeat(3,1fr);
                    }
                }

                .facts-item {
                    position: relative;
                    align-self: start;
                    justify-self: center;

                }
                .facts-item h3{
                    margin: 2rem 0;
                    padding-left: 4rem;
                }
                .facts-item::before {
                    counter-increment: orderedlist;
                    content: counter(orderedlist);
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #cecece;
                    font-size: 5rem;
                    font-weight: bold;
                    line-height: 1;
                }
            `}</style>
            <div className='container'>
                <h1 className='main-title'>13 Surprising Facts About Avocados</h1>
                <figure>
                    <Image src={'/images/avocados.jpg'}
                        width={1000}
                        height={1000}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                    <figcaption>
                        Originally from
                        <a href='https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/'>Taste of home</a>
                    </figcaption>
                </figure>
                <ol className='facts-grid'>
                    <li className='facts-item'>
                        <h3> Most avocados come from Mexico</h3>
                        <p>While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.</p>
                    </li>
                    <li className='facts-item'>
                        <h3> <span></span>The conquistadors were huge fans.</h3>
                        <p>Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America.</p>
                    </li>
                    <li className='facts-item'>
                        <h3> <span></span>“Avocado” wasn’t its original name.</h3>
                        <p>Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”</p>
                    </li>
                    <li className='facts-item'>
                        <h3><span></span>It’s actually a fruit.</h3>
                        <p>Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.</p>
                    </li>
                    <li className='facts-item'>
                        <h3><span></span>There’s a secret trick to ripening them up quick</h3>
                        <p>Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.</p>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default about