import React, {Component} from 'react';
import {FirstComponent} from './first';
import { render } from '@testing-library/react';
import {Form} from './form';

const liste = [
  "ilk eleman",
  "ikinci eleman",
  "ucuncu eleman",
  "dorduncu eleman"
];

class App extends Component {


  listeyeEkle(val){
    liste.push(val);
    console.log(liste);
  }

  render(){
    const prop_sabiti = "Ilk prop sabiti";
   

  return (
    <div>
     ilk kodlar
     <br/>
     <FirstComponent ilkprop={prop_sabiti} ilk_list = {liste}></FirstComponent>
     <br/>
     <Form yeniListe={this.listeyeEkle}></Form>
    </div>
  );
}
}

export default App;
