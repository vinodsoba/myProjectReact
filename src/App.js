import React, {Component} from 'react'
import './index.css'
import Table from './Table'
import Home from './pages/Home'



/*class App extends Component {
   state ={
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Arnold Schwarnegger',
        job: 'Actor',
      },
      {
        name: 'Jean-Claude-Van-Damme',
        job: 'Actor',
      },
      {
        name: 'Sylvester Stallone',
        job: 'Action Hero',
      },
    ],
  }
    removeCharacter = (index) => {
      const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
              return i !== index
        }),
      })
    }

     render() {
        const { characters } = this.state

        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
          </div>
          )


      }

}

*/

function App() {
  return <Home />;
}

export default App;
