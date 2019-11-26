import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = ({ task }) => {
    const {
        author: { name, picture, title: authorTitle, score },
        date,
        popularity,
        isTrending,
        title,
        description,
        numComments,
        thumbnail,
        codeSubmissionTotal,
        pledgeTotal,
        pledgeGoal,
        pledgerCount,
        status
    } = task;

    return (
        <React.Fragment>
            <style jsx>{`
                .card {
                    border-radius: 10px;
                    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    max-width: 800px;
                    width: 80%;
                    margin: 50px;
                    background-color: lightgrey;
                }
                .card > .content {
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 20px;
                    background: white;
                }
                .card > .content .header {
                    display: flex;
                    flex-direction: row;
                    flex: 0 0 auto;
                    margin: 0 0 10px 0;
                }
                .card > .content .header .picture {
                    width: 70px;
                    height: 70px;
                    object-fit: cover;
                    border-radius: 50%;
                    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex: 0 0 auto;
                    justify-content: center;
                    align-items: center;
                }
                .card > .content .header .picture img {
                    width: 65px;
                    height: 65px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .card > .content .header .author {
                    flex: 1 0 auto;
                    margin: 0 20px;
                    display: flex;
                    flex-direction: column;
                }
                .card > .content .header .author .name {
                    font-size: 21px;
                    font-weight: bold;
                }
                .card > .content .header .author .authorTitle {
                    font-size: 18px;
                    color: lightgrey;
                }
                .card > .content .header .tag {
                    flex: 0 0 auto;
                    border-radius: 15px;
                    height: 30px;
                    color: white;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    ${isTrending
                        ? `background-color: orangered`
                        : status === 1
                        ? `background-color: limegreen`
                        : `background-color: deepskyblue`}
                }
                .card > .content .text {
                    display: flex;
                    flex-direction: column;
                    flex: 1 0 auto;
                    margin: 0 10px 10px 10px;
                }
                .card > .content .text .title {
                    margin: 0 0 10px 0;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card > .content .text .description {
                    margin: 0 0 10px 0;
                    font-size: 18px;
                    line-height: 30px;
                    color: grey;
                }
                .card > .content .info {
                    display: flex;
                    margin: 0 0 10px 0;
                    flex-direction: column;
                    border-radius: 5px;
                    border-style: solid;
                    border-width: 1px;
                    border-color: lightgray;
                    background-color: lightgray;
                }
                .card > .content .info > .content {
                    display: flex;
                    flex-direction: row;
                    background-color: white;
                    border-content-left-radius: 5px;
                    border-content-right-radius: 5px;
                }
                .card > .content .info > .content .imgContainer {
                    width: 270px;
                    height: 150px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px;
                    margin: 5px;
                    border-radius: 5px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.2);
                }
                .card > .content .info > .content .imgContainer img {
                    width: auto;
                    height: auto;
                    max-width: 250px;
                    max-height: 130px;
                    object-fit: cover;
                }
                .card > .content .info > .content .pledge {
                    flex: 1 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 20px;
                }
                .card > .content .info > .content .pledge .pledgeTotal {
                    color: deepskyblue;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card > .content .info > .content .pledge .pledgeGoal {
                    color: lightgrey;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .card > .content .info > .content .pledge .pledgerCount {
                    color: grey;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card > .content .info > .content .pledge .pledgers {
                    color: lightgrey;
                    font-size: 18px;
                }
                .card > .content .info > .content .pledgeButton {
                    flex: 1 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 20px;
                }
                .card > .content .info > .content .pledgeButton button {
                    flex: 0 0 auto;
                    border-radius: 15px;
                    height: 30px;
                    color: white;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: white;
                    font-size: 14px;
                    ${status === 1
                        ? `
                            border-color: deepskyblue;
                            color: deepskyblue;`
                        : `
                            border-color: limegreen;
                            color: limegreen;`}
                }
                .card > .content .info > .content .pledgeButton span {
                    color: grey;
                    font-weight: bold;
                    font-size: 18px;
                    align-self: flex-end;
                }
                .card > .content .info > .footer {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 20px;
                    font-size: 14px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    color: grey;
                }
                .card > .content .info > .footer .source {
                    margin-right: 30px;
                }
                .card > .footer {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 20px;
                    font-size: 14px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    color: grey;
                }
                .card > .footer > div {
                    margin: 0 10px;
                }
                .card > .footer > div.dots {
                    margin-left: auto;
                    font-size: 24px;
                    align-self: center;
                    line-height: 14px;
                }
            `}</style>
            <div className='card'>
                <div className='content'>
                    <div className='header'>
                        <div className='picture'>
                            <img src={picture} alt='picture' />
                        </div>
                        <div className='author'>
                            <div className='name'>{name}</div>
                            <div className='authorTitle'>{authorTitle}</div>
                        </div>
                        <div className='tag'>
                            {isTrending
                                ? `Trending`
                                : status === 1
                                ? `Task Open`
                                : `Task Complete`}
                        </div>
                    </div>
                    <div className='text'>
                        <div className='title'>{title}</div>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='info'>
                        <div className='content'>
                            <div className='imgContainer'>
                                <img src={thumbnail} alt='thumbnail' />
                            </div>
                            <div className='pledge'>
                                <span className='pledgeTotal'>{`$${pledgeTotal}`}</span>
                                <span className='pledgeGoal'>{`pledged of $${pledgeGoal} goal`}</span>
                                <span className='pledgerCount'>
                                    {pledgerCount}
                                </span>
                                <span className='pledgers'>pledgers</span>
                            </div>
                            <div className='pledgeButton'>
                                {status === 1 ? (
                                    <button>Pledge</button>
                                ) : (
                                    <React.Fragment>
                                        <button>View Submission</button>
                                        <span>Reward Claimed</span>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                        <div className='footer'>
                            <div className='source'>View Source</div>
                            <div className='submissions'>
                                {`</>`} Code Submissions ({codeSubmissionTotal})
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='comments'>
                        <FontAwesomeIcon icon={['fas', 'comment']} /> Comments (
                        {numComments})
                    </div>
                    <div className='share'>
                        <FontAwesomeIcon icon={['fas', 'share']} /> Share
                    </div>
                    <div className='dots'>. . .</div>
                </div>
            </div>
        </React.Fragment>
    );
};
