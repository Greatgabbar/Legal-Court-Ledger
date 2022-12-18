import React, { useEffect, useState } from 'react';
const Web3 = require('web3');
import { contractABI, contractAddress } from 'utils/utils';

export const UserContext = React.createContext();

const { ethereum } = window;

export const UserContextProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();

  const checkWalletConnected = async () => {
    if (!ethereum) return alert('Install Metamask');

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setConnectedAccount(accounts[0]);
    } else {
      console.log('No accounts found!!');
    }
  };

//   const getEthereumContract = () => {
    
//     return caseContract;
//   }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Install Metamask');
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setConnectedAccount(accounts[0]);
      console.log(contractAddress);

      const caseContract = new web3.eth.Contract(contractABI, contractAddress);

console.log("1")
// let tr = await caseContract.methods.addCase("wer",'snehil','0xD1cF8530E688159aCD7cc7D5F3Dd1D02FB41d3d3','12322','chupa','rupa','15322').send({from: "0xeE85657EA27e5D975B02EA6251882EE007c56719"}).then(function(receipt) {
//   console.log('akshat');
// })
let tri = await caseContract.methods.getCaseDetails("wer").send({from: "0xeE85657EA27e5D975B02EA6251882EE007c56719"}).then(function(receipt) {
  console.log('akshat');
})
console.log(tri);
const a = 
await caseContract.methods.testContract().send({from: "0xeE85657EA27e5D975B02EA6251882EE007c56719"}, function(error,result) {
  console.log(result);
});
console.log("2",a)
    // console.log(tr);
    // const accounts = await ethereum.request({
    //     method: 'eth_requestAccounts',
    //   });

      
      // console.log(connectedAccount);
    } catch (err) {
      console.log(err);

      throw new Error('No Ethereum accounts!!');
    }
  };

  useEffect(() => {
    checkWalletConnected();
  }, []);

  return (
    <UserContext.Provider value={{ connectWallet, connectedAccount }}>
      {children}
    </UserContext.Provider>
  );
};
