import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import {FirstGame} from "./Games/FirstGame";
import * as axios from "axios";

class App extends Component {

  state = FirstGame


    render() {
        async function getSample(){
            return await axios.get('http://localhost:8082/')
        }

        getSample().then(res => console.log(res))
    const { initialize, game } = this.state
    return (
        <div>
          <h1>HEADER2</h1>

          <div style={{height: "300px"}}>
            <IonPhaser game={game} initialize={initialize} />
          </div>


          <h1>footer</h1>
        </div>

    )
  }
}

export default App;