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
        string managementEntity;
        string sharedFund;
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
        mapAssociation[countTotalId].adminName = "Sempronio";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details";
        mapAssociation[countTotalId].durataContratto = "2025/06/30";
        mapAssociation[countTotalId].managementEntity = "Organo di controllo";
        mapAssociation[countTotalId].sharedFund = "0x8b77f539EaC4Dc818a42bAA9aA46f3272bf1c087";

        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business B";
        mapAssociation[countTotalId].businessNetworkId = "1235";
        mapAssociation[countTotalId].taxId = "VAT no 2";
        mapAssociation[countTotalId].businessAddress = "Street no area code 2";
        mapAssociation[countTotalId].businessCode = "Sic code 2";
        mapAssociation[countTotalId].adminName = "Caio";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details 2";
        mapAssociation[countTotalId].durataContratto = "2030/12/31";
        mapAssociation[countTotalId].managementEntity = "Organo di controllo";
        mapAssociation[countTotalId].sharedFund = "0x4A5D8c1e7938D43F3d07d87B8a2444d59276fF01";

        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "Network Business C";
        mapAssociation[countTotalId].businessNetworkId = "1236";
        mapAssociation[countTotalId].taxId = "VAT no";
        mapAssociation[countTotalId].businessAddress = "Street no area code";
        mapAssociation[countTotalId].businessCode = "Sic code";
        mapAssociation[countTotalId].adminName = "Rossi";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details";
        mapAssociation[countTotalId].durataContratto = "2028/05/12";
        mapAssociation[countTotalId].managementEntity = "Organo di controllo";
        mapAssociation[countTotalId].sharedFund = "0xDbf3DCb9A72CDa8951694Ca62BA308f42eb035C2";

        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = "BN I.M.G.";
        mapAssociation[countTotalId].businessNetworkId = "1237";
        mapAssociation[countTotalId].taxId = "VAT no";
        mapAssociation[countTotalId].businessAddress = "Street no area code";
        mapAssociation[countTotalId].businessCode = "Sic code";
        mapAssociation[countTotalId].adminName = "Verdi";
        mapAssociation[countTotalId].status = "Valid";
        mapAssociation[countTotalId].details = "Example details";
        mapAssociation[countTotalId].durataContratto = "2035/1/12";
        mapAssociation[countTotalId].managementEntity = "Organo di controllo";
        mapAssociation[countTotalId].sharedFund = "0xa09945E5365D8228B6b30A1b248e302b6d86A88a";
        
        mapAssociation[1].countMember=1; 
        mapAssociation[1].membersLookup[mapAssociation[1].countMember] = bianchi;
        mapAssociation[1].members[bianchi].addr = bianchi;
        mapAssociation[1].members[bianchi].role = "member";
        mapAssociation[1].members[bianchi].quota = 20000;
        mapAssociation[1].members[bianchi].taxId = 9111;
        mapAssociation[1].members[bianchi].votingRights = "1500 Class B";
        mapAssociation[1].members[bianchi].name = "Bianchi";
        mapAddressAssociation[bianchi].push(1);

        mapAssociation[1].countMember=2;    
        mapAssociation[1].membersLookup[mapAssociation[1].countMember] = greco;
        mapAssociation[1].members[greco].addr = greco;
        mapAssociation[1].members[greco].role = "admin";
        mapAssociation[1].members[greco].quota = 40000;
        mapAssociation[1].members[greco].taxId = 9112;
        mapAssociation[1].members[greco].votingRights = "1000 Class A";
        mapAssociation[1].members[greco].name = "Greco";
        mapAddressAssociation[greco].push(1);

        mapAssociation[2].countMember=1;
        mapAssociation[2].membersLookup[mapAssociation[2].countMember] = esposito;  
        mapAssociation[2].members[esposito].addr = esposito;
        mapAssociation[2].members[esposito].role = "member";
        mapAssociation[2].members[esposito].quota = 100000;
        mapAssociation[2].members[esposito].taxId = 9113;
        mapAssociation[2].members[esposito].votingRights = "1000 Class C";
        mapAssociation[2].members[esposito].name = "Esposito";
        mapAddressAssociation[esposito].push(2);

        mapAssociation[2].countMember=2; 
        mapAssociation[2].membersLookup[mapAssociation[2].countMember] = greco;  
        mapAssociation[2].members[greco].addr = greco;
        mapAssociation[2].members[greco].role = "admin";
        mapAssociation[2].members[greco].quota = 50000;
        mapAssociation[2].members[greco].taxId = 9114;
        mapAssociation[2].members[greco].votingRights = "1000 Class D";
        mapAssociation[2].members[greco].name = "Greco";
        mapAddressAssociation[greco].push(2);

        /**
        mapAssociation[4].countMember=1;
        mapAssociation[4].membersLookup[mapAssociation[4].countMember] = esposito;  
        mapAssociation[4].members[esposito].addr = esposito;
        mapAssociation[4].members[esposito].role = "member";
        mapAssociation[4].members[esposito].quota = 100000;
        mapAssociation[4].members[esposito].taxId = 9113;
        mapAssociation[4].members[esposito].votingRights = "1000 Class C";
        mapAssociation[4].members[esposito].name = "Esposito";
        mapAddressAssociation[esposito].push(4);

        mapAssociation[4].countMember=2; 
        mapAssociation[4].membersLookup[mapAssociation[4].countMember] = greco;  
        mapAssociation[4].members[greco].addr = greco;
        mapAssociation[4].members[greco].role = "admin";
        mapAssociation[4].members[greco].quota = 50000;
        mapAssociation[4].members[greco].taxId = 9114;
        mapAssociation[4].members[greco].votingRights = "1000 Class D";
        mapAssociation[4].members[greco].name = "Greco";
        mapAddressAssociation[greco].push(4);

        mapAssociation[4].countMember=3; 
        mapAssociation[4].membersLookup[mapAssociation[4].countMember] = bianchi;
        mapAssociation[4].members[bianchi].addr = bianchi;
        mapAssociation[4].members[bianchi].role = "member";
        mapAssociation[4].members[bianchi].quota = 20000;
        mapAssociation[4].members[bianchi].taxId = 9111;
        mapAssociation[4].members[bianchi].votingRights = "1500 Class B";
        mapAssociation[4].members[bianchi].name = "Bianchi";
        mapAddressAssociation[bianchi].push(4);
        */
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
            return uint2str(getFondoComune(mapAssociation[_countInput].businessNetworkName));
        }
        else if(compareStrings(_propertyInput,"managementEntity")) {
            return mapAssociation[_countInput].managementEntity;
        }
        else if(compareStrings(_propertyInput,"sharedFund")) {
            return mapAssociation[_countInput].sharedFund;
        } 
        else if(compareStrings(_propertyInput,"membersInfo")) {
            return getMembersInformationByBusinessContract(
                mapAssociation[_countInput].businessNetworkName
            );
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
                    " $ ");
            return
                strConcat(
                    quota,
                    " ( ",
                    uint2str( 
                        mapAssociation[_associationInput].members[memberAddr].quota * 100 
                        / getFondoComune(mapAssociation[_associationInput].businessNetworkName)),
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
                    countMemberIdx<=mapAssociation[countAssociationIdx].countMember;
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

    function getFondoComune(
        string memory _businessNetworkName) 
    public view
    returns (uint _fondoComune) {
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
                    countMemberIdx<=mapAssociation[countAssociationIdx].countMember;
                    countMemberIdx++
                ) {
                    address _addrMember = mapAssociation[countAssociationIdx].membersLookup[countMemberIdx];
                    Member storage member = mapAssociation[countAssociationIdx].members[_addrMember];
                    _fondoComune = _fondoComune + member.quota;          
                }
            }
        }
        return _fondoComune;
    }

    function addMemberToAssociation(
        address addrMember,
        string memory role,
        uint quota,
        uint taxId,
        string memory votingRight,
        string memory name,
        uint8 countAssociation
    ) public
    {
        mapAssociation[countAssociation].countMember=mapAssociation[countAssociation].countMember+1;    
        mapAssociation[countAssociation].membersLookup[mapAssociation[countAssociation].countMember] = addrMember;
        mapAssociation[countAssociation].members[addrMember].addr = addrMember;
        mapAssociation[countAssociation].members[addrMember].role = role;
        mapAssociation[countAssociation].members[addrMember].quota = quota;
        mapAssociation[countAssociation].members[addrMember].taxId = taxId;
        mapAssociation[countAssociation].members[addrMember].votingRights = votingRight;
        mapAssociation[countAssociation].members[addrMember].name = name;
        mapAddressAssociation[addrMember].push(countAssociation);
    }

    function createAssociation(
        string memory businessNetworkName,
        string memory businessNetworkId,
        string memory taxId,
        string memory businessAddress,
        string memory businessCode,
        string memory adminName,
        string memory status,
        string memory details,
        string memory durataContratto,
        string memory managementEntity,
        string memory sharedFund
    ) public {
        countTotalId = countTotalId + 1;
        mapAssociation[countTotalId].id = countTotalId;
        mapAssociation[countTotalId].businessNetworkName = businessNetworkName;
        mapAssociation[countTotalId].businessNetworkId = businessNetworkId;
        mapAssociation[countTotalId].taxId = taxId;
        mapAssociation[countTotalId].businessAddress = businessAddress;
        mapAssociation[countTotalId].businessCode = businessCode;
        mapAssociation[countTotalId].adminName = adminName;
        mapAssociation[countTotalId].status = status;
        mapAssociation[countTotalId].details = details;
        mapAssociation[countTotalId].durataContratto = durataContratto;
        mapAssociation[countTotalId].managementEntity = managementEntity;
        mapAssociation[countTotalId].sharedFund = sharedFund;
    }
}