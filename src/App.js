import React, {Component} from 'react';
import {FirstComponent} from './first';
import { render } from '@testing-library/react';
import {Form} from './form';


class App extends Component {

  constructor(){
    super();

    this.state = {liste:[
      "ilk eleman",
      "ikinci eleman",
      "ucuncu eleman",
      "dorduncu eleman"
    ]};

    this.listeyeEkle = this.listeyeEkle.bind(this);
  }

  listeyeEkle(val){
    let geciciListe = this.state.liste;
    geciciListe.push(val);
    this.setState({liste:geciciListe});

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
    </div>
  );
}
}

export default App;
