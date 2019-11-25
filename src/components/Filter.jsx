import React from 'react';

export const Filter = props => (
    <React.Fragment>
        <style jsx>{`
            .Filter {
                display: flex;
                flexdirection: column;
                height: 100%;
                width: 100%;
            }
        `}</style>
        <div className='Filter'>{props.children}</div>
    </React.Fragment>
);

