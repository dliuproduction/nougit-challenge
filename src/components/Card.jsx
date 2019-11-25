import React from 'react';

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
                    width: 80%;
                    margin: 50px;
                    padding: 20px;
                }
                .card .header {
                    display: flex;
                    flex-direction: row;
                    flex: 0 0 auto;
                    margin: 0 0 10px 0;
                }
                .card .header .picture {
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
                .card .header .picture img {
                    width: 65px;
                    height: 65px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .card .header .author {
                    flex: 1 0 auto;
                    margin: 0 20px;
                    display: flex;
                    flex-direction: column;
                }
                .card .header .author .name {
                    font-size: 21px;
                    font-weight: bold;
                }
                .card .header .author .authorTitle {
                    font-size: 18px;
                    color: lightgrey;
                }
                .card .header .tag {
                    flex: 0 0 auto;
                    border-radius: 15px;
                    height: 30px;
                    color: white;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                }
                .card .text {
                    display: flex;
                    flex-direction: column;
                    flex: 1 0 auto;
                    margin: 0 10px 10px 10px;
                }
                .card .text .title {
                    margin: 0 0 10px 0;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card .text .description {
                    margin: 0 0 10px 0;
                    font-size: 18px;
                    line-height: 30px;
                    color: grey;
                }
                .card .info {
                    display: flex;
                    margin: 0 0 10px 0;
                    flex-direction: row;
                    border-radius: 2px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.2);
                }
                .card .info .imgContainer {
                    width: 270px;
                    height: 150px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px;
                    margin: 1px;
                    border-radius: 2px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.2);
                }
                .card .info .imgContainer img {
                    width: auto;
                    height: auto;
                    max-width: 260px;
                    max-height: 140px;
                    object-fit: cover;
                }
                .card .info .pledge {
                    flex: 1 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 20px;
                }
                .card .info .pledge .pledgeTotal {
                    color: deepskyblue;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card .info .pledge .pledgeGoal {
                    color: lightgrey;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .card .info .pledge .pledgerCount {
                    color: grey;
                    font-weight: bold;
                    font-size: 24px;
                }
                .card .info .pledge .pledgers {
                    color: lightgrey;
                    font-size: 18px;
                }
                .card .info .pledgeButton {
                    flex: 1 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 20px;
                }
            `}</style>
            <div className='card'>
                <div className='header'>
                    <div className='picture'>
                        <img src={picture} alt='picture' />
                    </div>
                    <div className='author'>
                        <div className='name'>{name}</div>
                        <div className='authorTitle'>{authorTitle}</div>
                    </div>
                    <div
                        className='tag'
                        style={
                            isTrending
                                ? { backgroundColor: 'coral' }
                                : status === 1
                                ? { backgroundColor: 'lightgreen' }
                                : { backgroundColor: 'deepskyblue' }
                        }
                    >
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
                    <div className='imgContainer'>
                        <img src={thumbnail} alt='thumbnail' />
                    </div>
                    <div className='pledge'>
                        <span className='pledgeTotal'>{`$${pledgeTotal}`}</span>
                        <span className='pledgeGoal'>{`pledged of $${pledgeGoal} goal`}</span>
                        <span className='pledgerCount'>{pledgerCount}</span>
                        <span className='pledgers'>pledgers</span>
                    </div>
                </div>
                <div>share</div>
            </div>
        </React.Fragment>
    );
};
