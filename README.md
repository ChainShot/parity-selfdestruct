# Parity Multisig Library Selfdestruct

Let's re-create the bug that led to the infamous [parity multisig bug](https://github.com/openethereum/parity-ethereum/issues/6995). 

## Setup

Create a `.env` file with a `MAINNET_URL` set to an [alchemy](https://www.alchemy.com/) mainnet URL. 

## Execution

Take a look at the tests in `test/test.js`. You'll want to complete the two TODOs:

1. For the first TODO, replicate taking control of the logic contract ([tx 0x05f71e...](https://etherscan.io/tx/0x05f71e1b2cb4f03e547739db15d080fd30c989eda04d37ce6264c5686e0722c9))
2. For the second TODO, replicate destroying the logic contract ([tx 0x47fcff...](https://etherscan.io/tx/0x47f7cff7a5e671884629c93b368cb18f58a993f4b19c2a53a8662e3f1482f690))

Once you have completed these two TODOs you should be able to run the tests (`npx hardhat test`) and see all three test cases passing.

## Affected Wallets

The Parity Multisig wallets depended on this Library which was destroyed, so there were [many affected wallets](https://docs.google.com/spreadsheets/d/18dUFWIk84dmJngBoZG8BBk6S_P2MIzKcUB5LMdUY1Kg/). The largest of which were [this one](https://etherscan.io/address/0x3bfc20f0b9afcace800d73d2191166ff16540258) and [this one](https://etherscan.io/address/0x376c3e5547c68bc26240d8dcc6729fff665a4448)

## Postmortem

See [here](https://www.parity.io/blog/a-postmortem-on-the-parity-multi-sig-library-self-destruct/) for Parity's official postmortem on the matter.