import React, { Component } from 'react'
import posed from 'react-pose';
import CelebrityConsumer from '../context';

var uniqid = require('uniqid');
const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

export default class addCelebrity extends Component {
    state = {
        visibility : true,
        name : "",
        movie : "",
        age : ""
    }

    changeVisibility = (e) => {
        this.setState({ visibility : !this.state.visibility})
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addCelebrity= (dispatch, e) => {
        e.preventDefault();
        const {name, movie, age} = this.state;
        const newCelebrity = {
            id : uniqid(),
            name,
            movie,
            age 
        }
        dispatch({type : "ADD_USER", payload : newCelebrity});
    }

    render() {
        const {visibility, name, movie, age} = this.state;

        return(
            <CelebrityConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                
                                <button className="btn btn-dark btn-block mb-2" onClick={this.changeVisibility} >{visibility ? 'Hide Form' : 'Show Form'}</button>
                                <Animation pose={this.state.visibility ? 'visible' : 'hidden'}>
                                    <div className="card">
                                        <div className="card-header">
                                                <h4>Add Celebrity Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit = {this.addCelebrity.bind(this,dispatch)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control"
                                                        value={name} onChange={this.changeInput}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Movie</label>
                                                    <input type="text" name="movie" id="movie" placeholder="Enter Movie" className="form-control"
                                                        value={movie} onChange={this.changeInput}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Age</label>
                                                    <input type="text" name="age" id="age" placeholder="Enter Age" className="form-control"
                                                        value={age} onChange={this.changeInput}></input>
                                                </div>
                                                <button type="submit" className="btn btn-danger btn-block">Add Celebrity</button>
                                            </form>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </CelebrityConsumer>
        )        
    }
}
