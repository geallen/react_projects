import React, { Component } from 'react'
import Celebrity from './celebrity';
import CelebrityConsumer from '../context';

export default class celebritys extends React.Component {
    render() {
        return(
            <CelebrityConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map(celebrity => {
                                        return (
                                            <Celebrity 
                                                key = {celebrity.id}
                                                id = {celebrity.id}
                                                name = {celebrity.name}
                                                movie = {celebrity.movie}
                                                age = {celebrity.age} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </CelebrityConsumer>
        )        
    }
}

