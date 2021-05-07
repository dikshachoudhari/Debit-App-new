import React, { Component } from 'react';
import './App.css';
import Add from './Add/Add'
import { connect } from 'react-redux';

class App extends Component {

render() { 

  let transactionHistory = (
   <div>
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} INR {log.amount} | closing balance: INR {log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <div className="container">
     
<div className="card mt-5 shadow-sm"><div className="card-body"> <div className="App">
      <header className="App-header">
          <h1>Welcome!..😄</h1>
    
      </header>

      <h1>Account Balance: {this.props.balance}</h1>
<div className="row">
<div className="col-sm-6">
      <div className="atm">    
        <h2>Withdraw Amount</h2>
        <button className="mainbtn btn btn-md btn-primary" onClick={() => this.props.withdraw(500)}>Withdraw INR 500</button>
        <button className="mainbtn btn btn-md btn-primary" onClick={() => this.props.withdraw(100)}>Withdraw INR 100</button>
      </div>
</div>
<div className="col-sm-6">

      <Add />
</div>
</div>
<hr/>
      <div>
        <h3>Transaction History</h3>
        {transactionHistory}
      </div>
 
    </div></div></div></div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

