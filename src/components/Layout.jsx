import React from 'react';

export const Layout = props => (
    <React.Fragment>
        <div className='Layout'>{props.children}</div>
        <style jsx>{`
            .Layout {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `}</style>
    </React.Fragment>
);
