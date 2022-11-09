// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SleepingDeerNFT is ERC721 {
    address payable public owner;
    uint256 private tokenCounter;
    string public constant TOKEN_URI =
        "ipfs://Qmbco9bShyzBj39RmnfsunTJzxqb1aWpuMZEzzecdircRp/SleepingDeer.json";

    constructor() ERC721("SleepingDeer", "DEER") {
        tokenCounter = 0;
        owner = payable(msg.sender);
    }

    function mintNft() public {
        tokenCounter = tokenCounter + 1;
        _safeMint(msg.sender, tokenCounter);
    }

    function tokenURI(
        uint256 /*tokenId*/
    ) public pure override returns (string memory) {
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return tokenCounter;
    }
}
