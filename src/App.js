import logo from './logo.svg';
import './App.css';
import {Button, TextField} from '@mui/material'
import { useState } from 'react';
import { supplyChainDeliveryMan, supplyChainWareHouse } from './config/ethersUtil';
import { deliveryManAddress, receiverAddress } from './config/vars';

function App() {
  const [state, setState] = useState({
    cid: "",
    cid2: "",
    status: 2
  })
  const onChangeInputFields = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }
  const receiveByWareHouse = () => {
    supplyChainWareHouse.receiveByWareHouse(state.cid).then(res => {
      console.log(res)
      supplyChainWareHouse.productStatus(state.cid).then(res => {
        setState({...state, status: Number(res)})
      })
    })
  }

  const readyForDelivery = () => {
    supplyChainWareHouse.makeReadyForDelivery(state.cid, deliveryManAddress, receiverAddress).then(res => {
      console.log(res)
      supplyChainWareHouse.productStatus(state.cid).then(res => {
        setState({...state, status: Number(res)})
      })
    })
  }

  const pickUpForDelivery = () => {
    supplyChainDeliveryMan.pickUpProduct(state.cid2).then(res => {
      console.log(res)
      supplyChainWareHouse.productStatus(state.cid2).then(res => {
        setState({...state, status: Number(res)})
    })
  })
  }
  return (
   
     <div className="App">
      <TextField id="filled-basic" label="Product Cid" variant="filled" name = "cid" value = {state.cid}  onChange = {onChangeInputFields}/>
      <Button onClick = {receiveByWareHouse} disabled = {state.status !== 2}>Receive by WareHouse</Button>
      <Button onClick = {readyForDelivery} disabled = {state.status !== 3}>Product Ready For Delivery</Button>
      <br />
      <TextField id="filled-basic" label="Product Cid" variant="filled" name = "cid2" value = {state.cid2}  onChange = {onChangeInputFields}/>
      <Button onClick = {pickUpForDelivery} disabled = {state.status !== 4}>Pick up for delivery</Button>
    
    

    </div>
  );
}

export default App;
