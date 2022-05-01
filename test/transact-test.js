const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transact", function () {
  it("Should change to account value to 2 ETH", async function () {
    const TransactFactory = await ethers.getContractFactory("Transact");
    const transact = await TransactFactory.deploy();
    await transact.deployed();

    const [owner, addr1, addr2] = await ethers.getSigners();

    
    await transact.sendEth(addr1.address, 30);
    expect(await addr1.getBalance()).to.equal(30);
  });
});
