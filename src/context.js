import React, { Component } from 'react'

const CelebrityContext = React.createContext();

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
          ]
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