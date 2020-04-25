import React, {Component} from 'react';
import {FirstComponent} from './first';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
    const prop_sabiti = "Ilk prop sabiti";
    const liste = [
      "ilk eleman",
      "ikinci eleman",
      "ucuncu eleman",
      "dorduncu eleman"
    ];

  return (
    <div>
     ilk kodlar
     <br/>
     <FirstComponent ilkprop={prop_sabiti} ilk_list = {liste}></FirstComponent>
    </div>
  );
}
}

export default App;
