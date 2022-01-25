// contracts/CalculatorV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
 
contract CalculatorV2 {
    uint256 private value;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function initialValue(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
    
    // Reads the last stored value
    function getValue() public view returns (uint256) {
        return value;
    }
    
    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}