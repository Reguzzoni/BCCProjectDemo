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
        string durataContratto;
        uint fondoComune;
        uint countMember;
        mapping(uint => address) membersLookup;
    }

    struct Member {
        address addr;
        string role;
        uint quota;
        uint taxId;
        string votingRights;
        string name;
    }

    uint8 private countTotalId = 0;

    constructor(
    ) public {

        address bianchi=0x2831b64f4306F87931520DEd2f52F122618ED550 ;
        address esposito=0xA62890aaf033f1268ffea22C52A4b7d6245e7886;
        address greco=0xdcc52FC934d151fbcafA412b29FA8565A6A98B60;

        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business A";
        mapAssociation[countTotalId].businessNetworkId = "1234";
        mapAssociation[countTotalId].taxId = "VAT no";
        mapAssociation[countTotalId].businessAddress = "Street no area code";
        mapAssociation[countTotalId].businessCode = "Sic code";
        mapAssociation[countTotalId].adminName = addressToString(greco);
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details";
        mapAssociation[countTotalId].durataContratto = "8 anni";
        mapAssociation[countTotalId].fondoComune = 10;


        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business B";
        mapAssociation[countTotalId].businessNetworkId = "1235";
        mapAssociation[countTotalId].taxId = "VAT no 2";
        mapAssociation[countTotalId].businessAddress = "Street no area code 2";
        mapAssociation[countTotalId].businessCode = "Sic code 2";
        mapAssociation[countTotalId].adminName = addressToString(greco);
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 2";
        mapAssociation[countTotalId].durataContratto = "5 anni";
        mapAssociation[countTotalId].fondoComune = 2;


        
        mapAssociation[1].countMember=1; 
        mapAssociation[1].membersLookup[mapAssociation[1].countMember] = bianchi;
        mapAssociation[1].members[bianchi].addr = bianchi;
        mapAssociation[1].members[bianchi].role = "member";
        mapAssociation[1].members[bianchi].quota = 5;
        mapAssociation[1].members[bianchi].taxId = 9111;
        mapAssociation[1].members[bianchi].votingRights = "1500 Class B";
        mapAssociation[1].members[bianchi].name = "Bianchi";
        
        mapAddressAssociation[bianchi].push(1);

        mapAssociation[1].countMember=2;    
        mapAssociation[1].membersLookup[mapAssociation[1].countMember] = greco;
        mapAssociation[1].members[greco].addr = greco;
        mapAssociation[1].members[greco].role = "admin";
        mapAssociation[1].members[greco].quota = 5;
        mapAssociation[1].members[greco].taxId = 9112;
        mapAssociation[1].members[greco].votingRights = "1000 Class A";
        mapAssociation[1].members[greco].name = "Greco";
        mapAddressAssociation[greco].push(1);

        mapAssociation[2].countMember=1;
        mapAssociation[2].membersLookup[mapAssociation[2].countMember] = esposito;  
        mapAssociation[2].members[esposito].addr = esposito;
        mapAssociation[2].members[esposito].role = "member";
        mapAssociation[2].members[esposito].quota = 1;
        mapAssociation[2].members[esposito].taxId = 9113;
        mapAssociation[2].members[esposito].votingRights = "1000 Class C";
        mapAssociation[2].members[esposito].name = "Esposito";
        mapAddressAssociation[esposito].push(2);

        mapAssociation[2].countMember=2; 
        mapAssociation[2].membersLookup[mapAssociation[2].countMember] = greco;  
        mapAssociation[2].members[greco].addr = greco;
        mapAssociation[2].members[greco].role = "admin";
        mapAssociation[2].members[greco].quota = 1;
        mapAssociation[2].members[greco].taxId = 9114;
        mapAssociation[2].members[greco].votingRights = "1000 Class D";
        mapAssociation[2].members[greco].name = "Greco";
        mapAddressAssociation[greco].push(2);
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
        else if(compareStrings(_propertyInput,"durataContratto")) {
            return mapAssociation[_countInput].durataContratto;
        }
        else if(compareStrings(_propertyInput,"fondoComune")) {
            return uint2str(mapAssociation[_countInput].fondoComune);
        }
    }

    function getMemberPropertyById(
        uint _associationInput,
        uint _memberInput,
        string memory _propertyInput
    ) view
    public returns(string memory) {
        address memberAddr = mapAssociation[_associationInput].membersLookup[_memberInput];
        if(compareStrings(_propertyInput,"address")) {
            return addressToString(mapAssociation[_associationInput].members[memberAddr].addr);
        }
        else if(compareStrings(_propertyInput,"role")) {
            return mapAssociation[_associationInput].members[memberAddr].role;
        }
        else if(compareStrings(_propertyInput,"quota")) {
            string memory quota = 
                strConcat(
                    uint2str(mapAssociation[_associationInput].members[memberAddr].quota),
                    " € ");
            return
                strConcat(
                    quota,
                    " ( ",
                    uint2str( 
                        mapAssociation[_associationInput].members[memberAddr].quota * 100 
                        / mapAssociation[_associationInput].fondoComune),
                    " % )"
                );
        }
        else if(compareStrings(_propertyInput,"votingRights")) {
            return mapAssociation[_associationInput].members[memberAddr].votingRights;
        }
        else if(compareStrings(_propertyInput,"name")) {
            return mapAssociation[_associationInput].members[memberAddr].name;
        }
        else if(compareStrings(_propertyInput,"taxId")) {
            return uint2str(mapAssociation[_associationInput].members[memberAddr].taxId);
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

    function getCountMembersByAssociationId(
        uint _associationInput
    ) 
    public view 
    returns (uint) {
        return mapAssociation[_associationInput].countMember;
    }

    function getMyIds() 
    public view
    returns (uint8[] memory) {
        return mapAddressAssociation[msg.sender];
    }

    function getMembersInformationByBusinessContract(
        string memory _businessNetworkName) 
    public view
    returns (string memory allMemoryInfo) {
        for (
            uint countAssociationIdx=1; 
            countAssociationIdx<=countTotalId;
            countAssociationIdx++) 
        {    
            if(
                compareStrings(
                    mapAssociation[countAssociationIdx].businessNetworkName,_businessNetworkName) 
            ) {
                
                for (
                    uint countMemberIdx=1; 
                    countMemberIdx<=mapAssociation[countMemberIdx].countMember;
                    countMemberIdx++
                ) {
                    address _addrMember = mapAssociation[countAssociationIdx].membersLookup[countMemberIdx];
                    Member storage member = mapAssociation[countAssociationIdx].members[_addrMember];
                    
                    string memory _member = " - Member : ";
                    string memory _infoAddrMember = strConcat("address : ", addressToString(_addrMember));
                    string memory _quota = strConcat(", quota : ", uint2str(member.quota));
                    string memory _role = strConcat(", role : ", member.role);
                    

                    string memory memberInfo = 
                        strConcat(
                            _member,
                            _infoAddrMember,
                            _quota,
                            _role
                        );

                    allMemoryInfo = 
                        strConcat(
                            allMemoryInfo, 
                            memberInfo);
                   
                }
            }
        }

        return allMemoryInfo;
    }
}