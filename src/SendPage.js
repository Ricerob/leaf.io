import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Web3 from "web3";

const SendPage = () => {
    let params = useParams();
    let navigate = useNavigate();
    if(!Web3.utils.isAddress(params.addr)){
        navigate('/');
    }
    return <h3>Send ETH to: {params.addr}</h3>
}

export default SendPage;