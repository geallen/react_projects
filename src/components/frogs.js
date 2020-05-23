import React, { Component } from 'react'
import CelebrityConsumer from '../context';

export default class frogs extends Component {
    render() {
        return (
           <CelebrityConsumer>
               {({isAFrog, dispatch}) => {
                   return (
                       <div>
                           <div>{isAFrog ? "🐸 croak" : "...silence..."}</div>
                           <button onClick={ e=> dispatch({type: "TOGGLE"})}>
                               Change
                           </button>
                       </div>
                   )
               }}
           </CelebrityConsumer>
        )
    }
}
