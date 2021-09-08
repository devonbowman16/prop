import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ageNum: this.props.age
        };
    }

    render() {

        const ageUp = ()=>{             
            this.setState({ageNum: this.state.ageNum+1});
        }






        return <div className="person">
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <h5>Age: {this.state.ageNum}</h5>
            <h5>Hair Color: {this.props.hairColor}</h5>
            <p><button onClick = {ageUp}>Happy Birthday, {this.props.firstName}!</button></p>
        </div>
    }
}

export default PersonCard;