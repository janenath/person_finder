import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="avatar"></div>
                <div className="personText">
                    <h3 className="name">name goes here</h3>
                    <p className="description">Partial traumatic metacarpophalangeal amputation of right little finger, subsequent encounter.
Anything can go here</p>
                </div>
            </div>
        );
    }
}

export default Card;