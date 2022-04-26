import React from "react";
import { useParams } from "react-router-dom";

const SendPage = () => {
    let params = useParams();
    return <h3>Send ETH to: {params.addr}</h3>
}

export default SendPage;