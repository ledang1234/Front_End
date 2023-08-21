import React , {Component} from 'react';
import './App.css';

import Contain from "./Components/Models/Contain"
import BtnGroup from "./Components/Store/BtnGroup"
import Store from "./Components/Store/Store"


import chosenItems from './Data/ChosenItems';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // item: null
      chosenItems: chosenItems.ListOfItems
    }
  }
imgSrcTransferApp = (item)=>{
  this.setState({
    chosenItems: [...this.state.chosenItems, item]   
  
  })
}

  render(){
    console.log(this.state.chosenItems);
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center">DRESSING ROOM</h1>
          <div className="row">
            {/* Chua item */}
            <div className="col-md-8 col-lg-8">
            <BtnGroup/>
            <Store imgSrcTransferApp={this.imgSrcTransferApp.bind(this)}/>
            </div>
             
            {/* Chua nguoi mau */}
            <div className="col-md-4 col-lg-4">
              {/* <Contain item={this.state.item}/> */}
              <Contain chosenItems={this.state.chosenItems} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
