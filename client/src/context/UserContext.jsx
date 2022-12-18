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
      alert('Account connected');

      const caseContract = new web3.eth.Contract(contractABI, contractAddress);

      const a = await caseContract.methods
        .testContract()
        .send(
          { from: connectedAccount },
          function (error, result) {
            console.log(result);
          }
        );
    } catch (err) {
      console.log(err);

      throw new Error('No Ethereum accounts!!');
    }
  };

  const makeTransaction = async (
    id,
    name,
    lawyer,
    date,
    accused,
    rep,
    hearDate
  ) => {
    try {
      if (!ethereum) return alert('Install Metamask');
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setConnectedAccount(accounts[0]);
      console.log(contractAddress);
      // alert('Account connected');

      const caseContract = new web3.eth.Contract(contractABI, contractAddress);

      let tr = await caseContract.methods
        .addCase(id, name, lawyer, date, accused, rep, hearDate)
        .send({ from: connectedAccount })
        .then(function (receipt) {
          console.log('akshat');
        });
    } catch (err) {
      console.log(err);

      throw new Error('No Ethereum accounts!!');
    }
  };

  const uploadEvidenceGan = async (
    id,
    name,
    lawyer,
    date,
    file,
    severity,
    verdict,
    judge
  ) => {
    try {
      if (!ethereum) return alert('Install Metamask');
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setConnectedAccount(accounts[0]);
      console.log(contractAddress);
      // alert('Account connected');

      const caseContract = new web3.eth.Contract(contractABI, contractAddress);

      let tr = await caseContract.methods
        .modifyCase(id, name, lawyer, date, file, severity, verdict, judge)
        .send({ from: '0xeE85657EA27e5D975B02EA6251882EE007c56719' })
        .then(function (receipt) {
          console.log('akshat');
        });

      let tri = await caseContract.methods
        .getCaseDetails('DLERC0423')
        .send({ from: connectedAccount })
        .then(function (receipt) {
          console.log('aksh', receipt);
        });
      console.log(tri);
    } catch (err) {
      console.log(err);

      throw new Error('No Ethereum accounts!!');
    }
  };

  useEffect(() => {
    checkWalletConnected();
  }, []);

  return (
    <UserContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        makeTransaction,
        uploadEvidenceGan,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
