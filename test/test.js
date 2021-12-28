const { assert } = require("chai");
const { ethers } = require("hardhat");

const PARITY_WALLET_ADDRESS = "0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4";

describe("Parity Multisig", () => {
  let contract, signer0, addr0;
  before(async () => {
    [addr0] = await ethers.provider.listAccounts();

    signer0 = await ethers.provider.getSigner(0);
    
    contract = await ethers.getContractAt("ParityWallet", PARITY_WALLET_ADDRESS);
  });

  it("should initially have code at the address", async () => {
    const code = await ethers.provider.getCode(contract.address);

    assert.notEqual(code, "0x");
  });

  describe("after taking ownership", () => {
    before(async () => {
      // TODO: take ownership! 
    });
    
    it("should have the address set as an owner", async () => {
      const isOwner = await contract.isOwner(addr0);
      
      assert(isOwner);
    });
    
    describe("after killing the contract", () => {
      before(async () => {
        // TODO: accidentally kill it
      });

      it("should selfdestruct the contract", async function () {
        const code = await ethers.provider.getCode(contract.address);

        assert.equal(code, "0x");
      });
    });
  });
});
