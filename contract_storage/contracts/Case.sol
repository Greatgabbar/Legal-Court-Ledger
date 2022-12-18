//SPDX-License-Identifier:MIT
pragma solidity ^0.5.1;

contract Case {
    address public owner; 
    constructor() public {
        owner  = msg.sender;
        // i could add a person in the constructor here and instead of a separate array of 
    }
    struct legal_case {
        string name;
        string id;
        string accused;
        string rep;
        string dateAdded;
        string hearingDate;
        string files;
        uint severity;
        string verdict;
        string lawyers;
        string judge; 
        address admin;
        string[] records; 
    }

    struct lawyer{
        string name; 
        address id;
        string cases;
    }
    struct judge{
        string name; 
        address id;
        string cases;
    }
    struct admin{
        string name; 
        address id;
        string cases;
    }

    string[] public all_cases;
    address[] public lawyerList;
    address[] public judgeList;
    address[] public adminList;

    mapping(string => legal_case) id_to_case;
    mapping(address => lawyer) addr_to_lawyer;
    mapping(address => judge) addr_to_judge;
    mapping(address => admin) addr_to_admin;
    
    function getCaseUser( string memory id) view public returns ( string memory, string memory, address, string memory, string memory){
        return ( id_to_case[id].name,id_to_case[id].id,id_to_case[id].admin,id_to_case[id].lawyers,id_to_case[id].judge);
    }
    function getCaseDetails( string memory id) view public returns (string memory,uint, string memory,string memory,string memory, string memory, string memory){
        return ( id_to_case[id].files,id_to_case[id].severity,id_to_case[id].verdict,id_to_case[id].dateAdded,id_to_case[id].accused,id_to_case[id].rep, id_to_case[id].hearingDate);
    }

    function getLawyer( address id) view public returns ( string memory, string memory, address ){
        return ( addr_to_lawyer[id].name, addr_to_lawyer[id].cases, addr_to_lawyer[id].id);
    }
    function getJudge( address id) view public returns ( string memory, string memory ,address){
        return ( addr_to_judge[id].name, addr_to_judge[id].cases, addr_to_judge[id].id);
    }
    function getAdmin( address id) view public returns ( string memory, string memory, address ){
        return ( addr_to_admin[id].name, addr_to_admin[id].cases, addr_to_admin[id].id);
    }

    function addLawyer( string memory name, address id) public {
        // require(msg.sender == owner );
        
        lawyer memory l;
        l.name = name; 
        l.id = id; 
        addr_to_lawyer[id] = l;
        lawyerList.push(id);
    }
    function addJudge( string memory name, address id) public {
        // require(msg.sender == owner );
        
        judge memory l;
        l.name = name; 
        l.id = id; 
        addr_to_judge[id] = l;
        judgeList.push(id);
    }
    function addCase(string memory id, string memory name, string memory lawyer, string memory date,string memory accused, string memory rep, string memory hearingDate) public {
        require(msg.sender == owner );
        
        legal_case memory c;
        c.admin = owner;
        c.name = name; 
        c.id = id; 
        c.accused = accused;
        c.rep = rep;
        c.hearingDate = hearingDate;
        c.dateAdded = date;
        c.lawyers = lawyer;
        c.verdict = 'unsolved';
        c.files = '';
        id_to_case[id] = c; 
        all_cases.push(id); 
    }
    // removeCase( ) public {}
    function modifyCase(string memory id, string memory name, string memory lawyer,string memory hearingDate, string memory files, uint severity, string memory verdict, string memory judge) public{
        id_to_case[id].name = name;
        id_to_case[id].lawyers = lawyer;
        id_to_case[id].judge = judge;
        id_to_case[id].hearingDate = hearingDate;
        id_to_case[id].files = files;
        id_to_case[id].severity = severity;
        id_to_case[id].verdict = verdict;
    }

    function modifyLawyer( address id,string memory cases) public {
        addr_to_lawyer[id].cases = cases;
    }
    function modifyJudge( address id,string memory cases) public {
        addr_to_judge[id].cases = cases;
    }
    function modifyAdmin( address id,string memory cases) public {
        addr_to_admin[id].cases = cases;
    }
}