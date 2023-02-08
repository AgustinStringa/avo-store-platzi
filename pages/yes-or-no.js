import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'

const YesOrNo = () => {

    const [resolving, setResolving] = useState(false);
    const responseRef = useRef(null);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const responseValue = () => {
        setResolving(true);
        let response = '';
        if (getRandomInt(2) == 1) {
            response = 'NO';
        } else {
            response = 'YES';
        }
        return new Promise((res, rej) => {
            setTimeout(() => {
                setResolving(false);
                res(response);
            }, 1500)
        })
    }
    const setResponseValue = () => {
        let newValue = '';
        responseValue().then((res) => {
            console.log(res);
            newValue = res;
            responseRef.current.innerText = `${newValue}`
        })
    }
    useEffect(() => {
        setResponseValue()
    }, [])
    return (
        <>
            <style jsx>{`
                .response {
                    color: #21ba45;
                    font-size: 10rem;
                    text-align: center;
                }
                .resolving {
                    color: grey;
                }
                .try-again-button {
                    transition: all .2s ease-in-out;
                    padding: .5rem 1rem;
                    color: #fff;
                    background-color: #21ba45;
                    outline: none;
                    border: 1px solid #c1c1c1;
                    border-radius: .5rem;
                    font-weight: bold;
                    width: 150px;
                    cursor: pointer;
                    display: inline-block;

                }
                .try-again-button:hover {
                    background-color: #16ab39;
                }
                .try-again-button:disabled {
                    background-color: #9be0ab;
                }
                .back-button {
                    border: 1px solid rgba(0,0,0,.87);
                    border-radius: .5rem;
                    display: inline-block;
                    padding: .5rem 1rem;
                    cursor: pointer;

                }
                .container > div {
                    text-align: center;
                    margin: 1rem auto;
                }
                .container > div:last-child {
                    margin-bottom: 3rem;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
                .spinner {
                    border: 4px solid rgba(0, 0, 0, .1);
                    /* border-color: white; */
                    border-left-color: transparent;
                    border-left-color: white;
                    width: 25px;
                    height: 25px;
                    animation: spin .4s linear infinite;
                    border-radius: 50%;
                    margin: 0 auto;
                }
            `}</style>
            <div className='container'>
                <p className={`response ${resolving ? 'resolving' : ''}`} ref={responseRef}></p>
                <div>
                    <button className='try-again-button'
                        disabled={resolving}
                        onClick={setResponseValue}>
                        {resolving ? <div className='spinner'></div> : 'Try Again'}
                    </button>
                </div>
                <div>
                    <Link href="/" legacyBehavior>
                        <a className='back-button'>Back to Home</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default YesOrNo