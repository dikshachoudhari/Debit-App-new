import React from 'react';
import { connect } from 'react-redux';

class Add extends React.Component {

  render() {
  return (

    <div className="bank">    
        <h2>Add Amount</h2>

  
      <label>Make a deposit:<br />
      <input 
         type="number"
         className="textfield form-control"
         onChange={e => this.setState({ number: e.target.value })} required/>
      </label>
    
    <button type="submit"
        className="mainbtn btn btn-md" 
        onClick={(amount) => this.props.deposit(parseInt(this.state.number, 10))}>Confirm
      </button>
    </div>
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
    deposit: (amount) => dispatch({type:'deposit', value: amount}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);

