import React, { Component } from 'react';
import './App.css';

// IMPORT CONTAINER
import Contain from './Components/Models/Contain';
import Store from './Components/Store/Store';
import Btngroup from './Components/Store/Btngroup';

// IMPORT DATA
import chosenItems from './Data/ChosenItems';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // item: null
      chosenItems: chosenItems.ListOfItems
    }
  }

  appTransferImgSrc = (item) => {
    this.setState({
      // item: item,
      chosenItems: [...this.state.chosenItems, item]
    })
  }

  render() {
    console.log(this.state.chosenItems);
    return (
      <div className="container-fluid">
        <h1 className="text-center">ĐỒ ÁN 3 - PHÒNG THỬ ĐỒ</h1>
        <div className="row">
          {/* Hiển thị danh sách các item */}
          <div className="col-md-8">
            <Btngroup/>
            <Store appTransferImgSrc={this.appTransferImgSrc.bind(this)} />
          </div>

          {/* Hiển thị người mẫu */}
          <div className="col-md-4">
            {/* <Contain item={this.state.item} /> */}
            <Contain chosenItems={this.state.chosenItems} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

