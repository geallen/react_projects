import React, { Component } from 'react';

const CelebrityContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
        return {
          ...state,
          users: [...state.users, action.payload]
      }
    case "UPDATE_USER":
      let index = action.payload.id;
      state.users.find(user => user.id === index).age = action.payload.age;
      state.users.find(user => user.id === index).movie = action.payload.movie;

      return {
        ...state
      }

    case "TOGGLE":
      return { ...state, isAFrog : !state.isAFrog};
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
          isAFrog : false,
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