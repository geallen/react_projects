import React, { Component } from 'react'
import Celebrity from './celebrity';

export default class celebritys extends React.Component {
    render() {
        const {users} = this.props;

        return (
            <div>
                {
                    users.map(celebrity => {
                        return (
                            <Celebrity 
                                key = {celebrity.id}
                                name={celebrity.name}
                                movie={celebrity.movie}
                                age={celebrity.age} />
                        )
                    })
                }
            </div>
        )
    }
}
