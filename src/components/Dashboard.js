import React, { useState, useContext, useEffect } from "react";
import { Web3Context } from "../web3";

export default function Dashboard() {
  const {
    getBalances,
    contracts: { token },
  } = useContext(Web3Context);

  const [balances, setBalances] = useState({});

  useEffect(() => {
    if (token) {
      getBalances().then((b) => setBalances(b));
    } else setBalances({});
  }, [token]);

  return (
    <div className="app-container">
      <h1 className="text-center mt-5">User Dashboard</h1>
      <p>ETH Balance: {balances.ETH}</p>
      <p>DAI Balance: {balances.DAI}</p>
    </div>
  );
}
