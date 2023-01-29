import React, { Component } from "react";
import Web3 from "web3";
import { contractABI, contractAddress } from "./utils/constants";

const web3 = new Web3(window.ethereum);
const token = new web3.eth.Contract(contractABI, contractAddress);
await window.ethereum.enable();

class App extends Component {
  state = {
    owner: "0xedf460390989e36FB02506bc9c870914618fda69",
    balance: 10,
    toAddress: "",
    amount: 0,
  };

  async componentDidMount() {
    const owner = await token.methods.owner().call();
    const balance = await token.methods.balanceOf(owner).call();

    this.setState({ owner, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const { toAddress, amount } = this.state;
    const accounts = await web3.eth.getAccounts();

    await token.methods.transfer(toAddress, amount).send({ from: accounts[0] });
  };

  render() {
    const { owner, balance, toAddress, amount } = this.state;

    return (
      <div>
        <h1>Ethereum Payment</h1>
        <ul>
          <li>Owner: {owner}</li>
          <li>Balance: {balance}</li>
        </ul>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h2>Transfer Token</h2>
          <div>
            <label>To Address:</label>
            <input
              value={toAddress}
              onChange={(event) =>
                this.setState({ toAddress: event.target.value })
              }
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              value={amount}
              onChange={(event) =>
                this.setState({ amount: event.target.value })
              }
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
