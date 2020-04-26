import React, {Component} from 'react';
import {FirstComponent} from './first';
import { render } from '@testing-library/react';
import {Form} from './form';
import {Person} from './person';
import {Counter} from './counter';

class App extends Component {

  constructor(){
    super();

    this.state = {liste:[
      "ilk eleman",
      "ikinci eleman",
      "ucuncu eleman",
      "dorduncu eleman"
    ],
    counter : 0
  };

    this.listeyeEkle = this.listeyeEkle.bind(this);

    this.increment = this.increment.bind(this);

  }
  listeyeEkle(val){
    let geciciListe = this.state.liste;
    geciciListe.push(val);
    this.setState({liste:geciciListe});

  }

  increment(){
    this.setState({counter : this.state.counter +1});
  } 

  render(){
    const prop_sabiti = "Ilk prop sabiti";
   

  return (
    <div>
     ilk kodlar
     <br/>
     <FirstComponent ilkprop={prop_sabiti} ilk_list = {this.state.liste}></FirstComponent>
     <br/>
     <Form yeniListe={this.listeyeEkle}></Form>
     <br/>
    <Person name="Gamze"/>
    <br/>
    <Counter arttir={this.increment} sayi={this.state.counter}></Counter>

  
    </div>
  );
}
}

export default App;
