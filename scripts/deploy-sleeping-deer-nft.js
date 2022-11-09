const hre = require("hardhat");

async function main() {
  const SleepingDeer = await hre.ethers.getContractFactory("SleepingDeerNFT");
  const sleepingDeer = await SleepingDeer.deploy();

  await sleepingDeer.deployed();

  console.log(
    "SleepingDeer NFT successfully deployed to: ",
    sleepingDeer.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
