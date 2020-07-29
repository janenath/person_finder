import React from 'react';


class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="avatar" src={this.props.data.avatar} alt="avatar"/>
                <div className="personText">
                    <h3 className="name">{this.props.data.name}</h3>
                    <p className="description">{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;