const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("SleepingDeer Test", function () {
  let token, sleepingDeerContract, owner, user1, user2;

  beforeEach(async function () {
    token = await ethers.getContractFactory("SleepingDeerNFT");
    [owner, user1, user2] = await hre.ethers.getSigners();
    sleepingDeerContract = await token.deploy();
  });

  describe("On Deployment", function () {
    it("Should confirm the owner", async function () {
      expect(await sleepingDeerContract.owner()).to.equal(owner.address);
    });
  });
});
