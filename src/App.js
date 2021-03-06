import React, {Component} from 'react';
import {FirstComponent} from './components/first';
import {Form} from './components/form';
import {Person} from './components/person';
import {Counter} from './components/counter';
import Navbar from './components/navbar';
import Celebritys from './components/celebritys';
import AddCelebrity from './components/addCelebrity';
import Frogs from './components/frogs';

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
    <div className="container">
      ilk kodlar
      <br/>
      <Navbar/>
      <br/>
      <AddCelebrity></AddCelebrity>
      <br/>
      <FirstComponent ilkprop={prop_sabiti} ilk_list = {this.state.liste}></FirstComponent>
      <br/>
      <Form yeniListe={this.listeyeEkle}></Form>
      <br/>
      <Person name="Gamze"/>
      <br/>
      <Counter arttir={this.increment} sayi={this.state.counter}></Counter>
      <br/>
      <Celebritys></Celebritys>
      <br/>
      <Frogs></Frogs>
    </div>
  );
}
}

export default App;
