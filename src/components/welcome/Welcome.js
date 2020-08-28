import React from 'react';

function Welcome(props) {
    return (
        <div className="Welcome">
            <h2>Welcome, {props.name}!</h2>
        </div>
    );
}
export default Welcome;