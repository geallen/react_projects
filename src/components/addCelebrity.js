import React, { Component } from 'react'
import posed from 'react-pose';

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
        visibility : true
    }

    changeVisibility = (e) => {
        this.setState({ visibility : !this.state.visibility})
    }

    render() {
        const {visibility} = this.state;

        return (
            <div className="col-md-8 mb-4">

                <button className="btn btn-dark btn-block mb-2" onClick={this.changeVisibility} >{visibility ? 'Hide Form' : 'Show Form'}</button>
                <Animation pose={this.state.visibility ? 'visible' : 'hidden'}>
                    <div className="card">
                        <div className="card-header">
                                <h4>Add Celebrity Form</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Movie</label>
                                    <input type="text" name="movie" id="movie" placeholder="Enter Movie" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Age</label>
                                    <input type="text" name="age" id="age" placeholder="Enter Age" className="form-control"></input>
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
