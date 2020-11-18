import React from 'react';
import styled from 'styled-components';

const ArrayInfo = () => {
    return (
        <Info>
            <h1>Phase 0</h1>
            <p className="phase-description">
                Phase 0 of Array auto-harvests yield from DeFi protocols and automatically places it into the protocol's profit share pool to save gas and increase ROI.
            </p>
            <p className="phase-subtext">
                In addition to yield gained from Harvest and Pickle, Array is disbursed for governance and profit share.
            </p>

            <div className='social'>
                <h1 className="social-heading">follow for updates</h1>
                <div className="social-links">
                <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>

            
            
        </Info>
    );
}

export default ArrayInfo;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
    height: 95vh;
    background-color: #212121;
    color: white;

    h1 {
        font-size: 6em;
        margin-top: 0;
        margin-bottom: 60px;
    }
    
    .phase-description {
        font-size: 1.6em;
        width: 90%;
    }

    .phase-subtext {
        font-size: 1.3em;
        width: 90%;
        padding-bottom: 80%;
    }

    .social {
        width: 100%;
        display: flex;
        margin: 30px 40px 30px 30px;
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .social-heading {
            font-size: 2.2em;
            border: 3px solid white;
            width: 90%;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .social-links {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
            margin-right: 15px;
            .fab {
                color: white;
                font-size: 3em;
            }
        }
    }

    @media(max-width: 1920px) {
        h1 {
            font-size: 5em;
            margin-bottom: 40px;
        }
        .phase-subtext {
            padding-bottom: 0;
        }
        .social {
            padding-top: 25%;
            .social-heading {
                font-size: 1.6em;
                border: 3px solid white;
                width: 90%;
                text-align: center;
                margin-bottom: 30px;
            }
        }
    }
    //max-width: 1920px

    @media(max-width: 1440px) {
        h1 {
            font-size: 4em;
            margin-bottom: 40px;
        }
        .phase-description {
            font-size: 1.4em;
        }
        .phase-subtext {
            padding-bottom: 0;
            font-size: 1.1em;
        }
        .social {
            padding-top: 24%;
            .social-heading {
                font-size: 1.4em;
                border: 3px solid white;
                width: 90%;
                text-align: center;
                margin-bottom: 30px;
            }
            .social-links {
                .fab {
                    font-size: 2.2em;
                }
            }
        }
    }
    //max-width: 1440px

    @media(max-width: 1280px) {
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        .phase-description {
            font-size: 1.2em;
        }
        .phase-subtext {
            padding-bottom: 0;
            font-size: 1em;
        }
        .social {
            padding-top: 24%;
            .social-heading {
                font-size: 1.2em;
                border: 3px solid white;
                width: 90%;
                text-align: center;
                margin-bottom: 30px;
            }
            .social-links {
                .fab {
                    font-size: 2.2em;
                }
            }
        }
    }
    //max-width: 1280px
    





`;
