import React, { Component } from 'react'
import Celebrity from './celebrity';
import PropTypes from 'prop-types'


export default class celebritys extends React.Component {
    render() {
        const {users, deleteUser} = this.props;

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
                                age = {celebrity.age} 
                                deleteUser = {deleteUser} />
                        )
                    })
                }
            </div>
        )
    }
}

celebritys.prototypes = {
    users : PropTypes.array.isRequired,
    deleteUser : PropTypes.func.isRequired
}