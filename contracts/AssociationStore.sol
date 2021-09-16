pragma solidity >= 0.5.0 < 0.6.0;
import "./oraclize.sol";

contract AssociationStore  is usingOraclize {


    mapping(uint => Association) private mapAssociation;
    mapping(address => uint8[]) private mapAddressAssociation;

    struct Association {
        uint id;
        string businessNetworkName;
        string businessNetworkId;
        string taxId;
        string businessAddress;
        string businessCode;
        string adminName;
        string status;
        string details;
        mapping(address => Member) members;
    }

    struct Member {
        address addr;
        string role;
    }

    uint8 private countTotalId = 0;

    constructor(
    ) public {

        countTotalId = countTotalId + 1;

        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business A";
        mapAssociation[countTotalId].businessNetworkId = "1234";
        mapAssociation[countTotalId].taxId = "VAT no";
        mapAssociation[countTotalId].businessAddress = "Street no area code";
        mapAssociation[countTotalId].businessCode = "Sic code";
        mapAssociation[countTotalId].adminName = "0x390d3F741C69D948F6b96457abBfD561f1261fb6";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details";


        countTotalId = countTotalId + 1;

        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business B";
        mapAssociation[countTotalId].businessNetworkId = "1235";
        mapAssociation[countTotalId].taxId = "VAT no 2";
        mapAssociation[countTotalId].businessAddress = "Street no area code 2";
        mapAssociation[countTotalId].businessCode = "Sic code 2";
        mapAssociation[countTotalId].adminName = "0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 2";

        
        countTotalId = countTotalId + 1;

        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business C";
        mapAssociation[countTotalId].businessNetworkId = "1236";
        mapAssociation[countTotalId].taxId = "VAT no 3";
        mapAssociation[countTotalId].businessAddress = "Street no area code 3";
        mapAssociation[countTotalId].businessCode = "Sic code 3";
        mapAssociation[countTotalId].adminName = "0x5618972C79dD7495710E01833D5D615C3825d841";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 3";


        countTotalId = countTotalId + 1;

        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business D";
        mapAssociation[countTotalId].businessNetworkId = "1237";
        mapAssociation[countTotalId].taxId = "VAT no 4";
        mapAssociation[countTotalId].businessAddress = "Street no area code 4";
        mapAssociation[countTotalId].businessCode = "Sic code 4";
        mapAssociation[countTotalId].adminName = "0x390d3F741C69D948F6b96457abBfD561f1261fb6";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 4 - ";


        countTotalId = countTotalId + 1;

        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business E";
        mapAssociation[countTotalId].businessNetworkId = "1238";
        mapAssociation[countTotalId].taxId = "VAT no 5";
        mapAssociation[countTotalId].businessAddress = "Street no area code 5";
        mapAssociation[countTotalId].businessCode = "Sic code 5";
        mapAssociation[countTotalId].adminName = "0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 5";

        mapAddressAssociation[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].push(1);
        mapAddressAssociation[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].push(2);
        mapAddressAssociation[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].push(5);
        mapAssociation[1].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].addr = 0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c;
        mapAssociation[1].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].role = "member";
        mapAssociation[2].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].addr = 0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c;
        mapAssociation[2].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].role = "admin";
        mapAssociation[5].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].addr = 0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c;
        mapAssociation[5].members[0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c].role = "admin";

        mapAddressAssociation[0x5618972C79dD7495710E01833D5D615C3825d841].push(3);
        mapAddressAssociation[0x5618972C79dD7495710E01833D5D615C3825d841].push(5);
        mapAssociation[3].members[0x5618972C79dD7495710E01833D5D615C3825d841].addr = 0x5618972C79dD7495710E01833D5D615C3825d841;
        mapAssociation[3].members[0x5618972C79dD7495710E01833D5D615C3825d841].role = "admin";
        mapAssociation[5].members[0x5618972C79dD7495710E01833D5D615C3825d841].addr = 0x5618972C79dD7495710E01833D5D615C3825d841;
        mapAssociation[5].members[0x5618972C79dD7495710E01833D5D615C3825d841].role = "member";
    }

    function getPropertyById(
        uint _countInput,
        string memory _propertyInput
    ) view
    public returns(string memory) {
        if(compareStrings(_propertyInput,"businessNetworkName")) {
            return mapAssociation[_countInput].businessNetworkName;
        }
        else if(compareStrings(_propertyInput,"businessNetworkId")) {
            return mapAssociation[_countInput].businessNetworkId;
        }
        else if(compareStrings(_propertyInput,"taxId")) {
            return mapAssociation[_countInput].taxId;
        }
        else if(compareStrings(_propertyInput,"businessAddress")) {
            return mapAssociation[_countInput].businessAddress;
        }
        else if(compareStrings(_propertyInput,"businessCode")) {
            return mapAssociation[_countInput].businessCode;
        }
        else if(compareStrings(_propertyInput,"adminName")) {
            return mapAssociation[_countInput].adminName;
        }
        else if(compareStrings(_propertyInput,"status")) {
            return mapAssociation[_countInput].status;
        }
        else if(compareStrings(_propertyInput,"details")) {
            return mapAssociation[_countInput].details;
        }
        else if(compareStrings(_propertyInput,"role")) {
            return mapAssociation[_countInput].members[msg.sender].role;
        }
        else if(compareStrings(_propertyInput,"id")) {
            return uint2str(mapAssociation[_countInput].id);
        }
    }
    
    function compareStrings(
        string memory a, string memory b
    ) public pure 
    returns (bool) {
        return (
            keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b)))
        );
    }

    function getCountTotalId() 
    public view 
    returns (uint) {
        return countTotalId;
    }

    function getMyIds() 
    public view
    returns (uint8[] memory) {
        return mapAddressAssociation[msg.sender];
    }

}