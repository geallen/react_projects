import React, { Component } from 'react'

const CelebrityContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload != user.id)
      }
    case "ADD_USER":
        return {
          ...state,
          users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

export class CelebrityProvider extends Component {
    state = {
        users : [
            {
              id: 1,
              name : "Monica Geller",
              movie : "Friends",
              age : "28"
            },
            {
              id: 2,              
              name : "John Locke",
              movie : "Lost",
              age : "43"
            },
            {
              id: 3,
              name : "Ted Mosby",
              movie : "HIMYM",
              age : "35"
            }
          ],
          dispatch : action => {
            this.setState(state => reducer(state, action))
          }
    }
    render() {
        return (
            <div>
                <CelebrityContext.Provider value= {this.state}>
                    {this.props.children}
                </CelebrityContext.Provider>
            </div>
        )
    }
}

const CelebrityConsumer = CelebrityContext.Consumer;

export default CelebrityConsumer;