pragma solidity >= 0.5.0 < 0.6.0;


contract JsonStore {

    mapping(address => string) private mapJson;

    function set(string memory _value) public {
        mapJson[msg.sender] = _value;
    }

    function get() public view returns (string memory ) {
        return mapJson[msg.sender];
    }
}