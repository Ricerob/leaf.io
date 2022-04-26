//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract LeafSend {

    // Minimum value of 0.005 eth to transfer
    uint minimumEth = 5000000 gwei;

    // Tracks total amount sent from one address to another
    mapping(address => mapping(address => uint256)) public amountSentTotal;

    // Let front-end know the transfer is complete
    event TransferComplete(uint weiSent);

    // Check to make sure we have minimum Ether for transfer
    modifier minEthCheck {
        require(msg.value >= minimumEth, "Not enough eth sent!");
        _;
    }

    // Recieve ether and send it to address
    function sendEth(address payable _sendTo) 
    public payable
    minEthCheck {
        address sender = msg.sender;
        (bool success, ) = _sendTo.call{value: msg.value}("");
        require(success, "Sending eth failed.");
        amountSentTotal[sender][_sendTo] = msg.value;
        emit TransferComplete(msg.value);
    }
}