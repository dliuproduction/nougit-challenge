import React from 'react';

export const Filter = props => {
    const { filter, setFilter } = props;
    return (
        <React.Fragment>
            <style jsx>{`
                .filter {
                    margin: 50px 50px 0px 70px;
                    font-size: 21px;
                    width: 80%;
                    max-width: 800px;
                    min-width: 400px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    font-weight: bold;
                }
                .filter button {
                    font-size: 21px;
                    height: 40px;
                    width: auto;
                    min-width: 100px;
                    padding: 5px 20px;
                    color: white;
                    background-color: lightgrey;
                    border-radius: 20px;
                }
                .filter button:active {
                    background-color: gray;
                }
                .filter button:hover {
                    background-color: gray;
                }
                .filter
                    ${filter !== 'TRENDING' &&
                    filter !== 'OPEN' &&
                    filter !== 'CLOSED'
                        ? `.all`
                        : filter === 'TRENDING'
                        ? `.trending`
                        : filter === 'OPEN'
                        ? `.open`
                        : filter === 'CLOSED' && `.closed`} {
                    background-color: gray;
                }
            `}</style>
            <div className='filter'>
                Filter by:
                <button className='all' onClick={() => setFilter(null)}>
                    All
                </button>
                <button onClick={() => setFilter('TRENDING')}>Trending</button>
                <button onClick={() => setFilter('OPEN')}>Open Tasks</button>
                <button onClick={() => setFilter('CLOSED')}>
                    Completed Tasks
                </button>
            </div>
        </React.Fragment>
    );
};
