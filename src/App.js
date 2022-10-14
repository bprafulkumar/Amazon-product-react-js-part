import React, {Component} from 'react';
import Classes from './App.module.css'
import Productpreview from './Productpreview/Productpreview';
import ProductDetails from './Productdetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './productData';

class App extends Component{
  state = {
    ProductData:ProductData,
    currentpreviewimagepos:0,
    styleName:'Black Strap',
    Showheartbeat:false
  }
  // const currenthour = new Date().getHours()> 9 ? new Date().getHours() : '0'+ new Date().getHours()
  // const currentminute = new Date().minutes()> 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes()

  // console.log(hours)

  changeurlofimage = (pos)=>{
    this.setState({currentpreviewimagepos : pos})
  }

  onclickfeatureitem = (pos) =>{
    let updatedState = false;
    if(pos==1){
      updatedState = true
    }
    this.setState({Showheartbeat:updatedState})
  }
  render(){
  return (
    <div className="App">

        <Topbar/>

      <div className={Classes.maincontainer}>
        <div className={Classes.productpreview}>
         <Productpreview currentpreviewimage={this.state.ProductData.colorOptions[this.state.currentpreviewimagepos].imageUrl} Showheartbeat ={this.state.Showheartbeat} styleName={this.state.styleName} />
        </div>

        <div className={Classes.productData}>
          <ProductDetails data={this.state.ProductData} changeurlofimage = {this.changeurlofimage} currentpreviewimagepos ={this.state.currentpreviewimagepos} onclickfeatureitem ={this.onclickfeatureitem} Showheartbeat ={this.state.Showheartbeat} />
        </div>
        
      </div>
    </div>
  );
}
}

export default App;
