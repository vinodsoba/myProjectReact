import React, {Component} from 'react'
import './default.scss'
import Table from './Table'
import Home from './pages/Home'
import Header from './components/Header'
import Homepage from './pages/Homepage'



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
  return (
    <div className="App">
        <Header />
      <div className="main">
        <Home />
        <Homepage />
      </div>
    </div>
  );

}

export default App;
