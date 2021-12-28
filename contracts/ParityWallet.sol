//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ParityWallet {
    function initWallet(address[] calldata _owners, uint256 _required, uint256 _daylimit) external;
    function isOwner(address _addr) external view returns (bool);
    function kill(address _to) external;
}
