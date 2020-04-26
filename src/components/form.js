import React from 'react'

export class Form extends React.Component{

    doSth(e){
        // enter a basinca sayfa yenilenmesini istemiyorsak asagidaki satir onemli
        e.preventDefault();
        // inputta yazilan degere erismek icinse asagidaki satir onemli 
        const girilenDeger = document.getElementById("input1").value;
        console.log("Girilen deger: ", girilenDeger);
        this.props.yeniListe(girilenDeger);
    }

 render(){
     return(
        <div>
        
            <form onSubmit={e => this.doSth(e)}>
                <input type="text" id="input1"/>
            </form>
            <button onClick={this.doSth.bind(this)}>Gonder</button>
        </div>

     );
 }   
}