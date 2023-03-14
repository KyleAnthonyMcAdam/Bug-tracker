let btnClose = document.querySelector(".theCloseButton");
let btnNew = document.querySelector(".theNewButton");
let btnClear = document.querySelector(".theClearButton");
let Modal = document.getElementById("theform1");
let blurModal = document.querySelector("#blurrContainer");
let table = document.querySelector("#project-table");
let nameInput = document.querySelector("#Project-Name");
let descriptionInput = document.querySelector("#Project-Description");
let memeberInput = document.querySelector("#Project-Member");
let projectInput = document.querySelector("#inputProject");


//Declare arrays
let arr = [];
let arrMembers = [];


//gets Ticket list from local storage
function getData() {
  let str = localStorage.getItem("TicketList");
  if (str != null) arr = JSON.parse(str);
}

// The Reset button

btnClear.addEventListener("click", () => {
  localStorage.removeItem("TicketList");
  showData();
});

//1. Function to load data from local storage after each refresh
//2. Add only one row to table and not all existing rows again
function DetailedView(r) {
  let rowIndex = r.parentNode.parentNode.rowIndex;
  let TicketList = getTicket();
  TicketList.reverse();
  let ticket = TicketList[rowIndex - 1];

  localStorage.setItem("TicketView", JSON.stringify(ticket));
  window.open("DetailedView.html");
  window.close("Ticket.html");
}

//Delete the ticket row user clicks on from table and redisplays ticket list
function showData() {
  getData();
  let template = "";
  table = document.querySelector("#project-table");
  let x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }
  let TicketList = [];
  TicketList = TicketList.concat(
    JSON.parse(window.localStorage.getItem("TicketList") || "[]")
  );

//loops throught tickets and displays each
  for (let index = 0;index < TicketList.length;index++ 
  ) {
    const element = TicketList[TicketList.length-index-1];
    template = `
          <tr>
          <td>${element.ID}</td>
           <td>${element.Summary}</td>
           <td>${element.DateLog}</td>           
           <td>${element.Project}</td>
           <td>${element.Priority}</td>
           <td>${element.Status}</td>           
           <td>${element.Assingment}</td>          
           <td class = "faIcons"><button type="submit" onclick="hapus(this)"><i class="fa fa-trash-o"></i></button><button type="submit" onclick="DetailedView(this)" class ='detailbtn'><i class="fa-solid fa-ellipsis"></i></button></td>
           
           </tr>`;
    document.querySelector(".table-main-body").innerHTML += template;
  }
}

// The button to open up the form and blur the background

btnNew.addEventListener("click", () => {
  blurModal.classList.add("blurr");
  Modal.classList.remove("hidden");
});

//Button to close the form and unblurr the background of content section

btnClose.addEventListener("click", () => {
  blurModal.classList.remove("blurr");
  Modal.classList.add("hidden");
});

//Only load predifined array elements to local storage if empty when website is loading

window.onload = () => {
  let str = localStorage.getItem("project");
  if (str != null) arr = JSON.parse(str);
  
  
  
  for (let key of arr){
    projectInput.options.add(new Option(`${key.Name}`, `${key.Name}`))
  }
  showData();
};

//Function to delete row when click the garbage button

function hapus(r) {

    
  
  let login = JSON.parse(window.localStorage.getItem("login"));
  if (login.username == "Administration") {
    var arr = getTicket();

    let rowIndex = r.parentNode.parentNode.rowIndex;
    let data = localStorage.getItem("TicketList");
    let myTab = document.getElementById("project-table");
    let objCells = myTab.rows.item(rowIndex).cells;
    let indexOfObject = arr.findIndex((object) => {
      return object.ID == objCells[0].innerText;
    });
    if (confirm("Are you sure you want to delete ticket#"+(arr.length+1-rowIndex))) {
    arr.splice(indexOfObject, 1);
    let starter = arr;
    localStorage.setItem("TicketList", JSON.stringify(arr));
    document.getElementById("project-table").deleteRow(rowIndex);
  }
}
}
function LoadIssues() {
  //add 20 issues and saves 
  let TicketList = [];
  let arrID = [  
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
  let arrSummarys = [
    "Search button missing",
    "Exit Button not working",
    "Search bar not searching",
    "Scroll bar not scrolling back up",
    "Enter Button disapears on click",
    "Search button missing",
    "Exit Button not working",
    "Search bar not searching",
    "Scroll bar not scrolling back up",
    "Enter Button disapears on click",
    "Search button missing",
    "Exit Button not working",
    "Search bar not searching",
    "Scroll bar not scrolling back up",
    "Enter Button disapears on click",
    "Search button missing",
    "Exit Button not working",
    "Search bar not searching",
    "Scroll bar not scrolling back up",
    "Enter Button disapears on click",
  ];
  let arrDescription = [
    "There isnt a search button in the search tab",
    "Exit but Causes program to freeze",
    "The form isnt searching when the search button is pressed",
    "Scrolling bar scrolles down but will not scroll up",
    "Enter button Not Working, disappear on click, no clue why",
    "There isnt a search button in the search tab",
    "Exit but Causes program to freeze",
    "The form isnt searching when the search button is pressed",
    "Scrolling bar scrolles down but will not scroll up",
    "Enter button Not Working, disappear on click, no clue why",
    "There isnt a search button in the search tab",
    "Exit but Causes program to freeze",
    "The form isnt searching when the search button is pressed",
    "Scrolling bar scrolles down but will not scroll up",
    "Enter button Not Working, disappear on click, no clue why",
    "There isnt a search button in the search tab",
    "Exit but Causes program to freeze",
    "The form isnt searching when the search button is pressed",
    "Scrolling bar scrolles down but will not scroll up",
    "Enter button Not Working, disappear on click, no clue why",
  ];
  let arrIdentifier = ["Sam", "Jhon", "Mike", "David", "Nick","Tim", "Gray", "Mike", "David", "Nick","Sam", "Jhon", "Mike", "David", "Kyle","Sam", "Jhon", "Mike", "David", "Nick"];
  
  let arrProjects = [
    "Accounting Website",
    "Resource management",
    "AI Text genarator",
    "Notepad program",
    "WebApp storage",
    "Accounting Website",
    "Resource management",
    "AI Text genarator",
    "Notepad program",
    "WebApp storage",
    "Accounting Website",
    "Resource management",
    "AI Text genarator",
    "Notepad program",
    "WebApp storage",
    "Accounting Website",
    "Resource management",
    "AI Text genarator",
    "Notepad program",
    "WebApp storage",
  ];
  let arrPriority = ["Low", "High", "Low", "High", "Medium","Low", "High", "Low", "High", "Medium","Low", "High", "Low", "High", "Medium","Low", "High", "Low", "High", "Medium"];
  let arrStatus = ["Open", "Overdue", "Open", "Overdue", "Resolved","Open", "Overdue", "Open", "Overdue", "Resolved","Open", "Overdue", "Open", "Overdue", "Resolved","Open", "Overdue", "Open", "Overdue", "Resolved"];
 
  let arrTargetDate = [
    "30/08/2022",
    "29/08/2022",
    "28/08/2022",
    "25/07/2022",
    "24/07/2022",
    "30/08/2022",
    "29/08/2022",
    "28/08/2022",
    "25/07/2022",
    "24/07/2022",
    "30/08/2022",
    "29/08/2022",
    "28/08/2022",
    "25/07/2022",
    "24/07/2022",
    "30/08/2022",
    "29/08/2022",
    "28/08/2022",
    "25/07/2022",
    "24/07/2022",
  ];
  let arrDateLog = [
    "28/08/2022",
    "27/08/2022",
    "25/08/2022",
    "24/07/2022",
    "23/07/2022",
    "28/08/2022",
    "27/08/2022",
    "25/08/2022",
    "24/07/2022",
    "23/07/2022",
    "28/08/2022",
    "27/08/2022",
    "25/08/2022",
    "24/07/2022",
    "23/07/2022",
    "28/08/2022",
    "27/08/2022",
    "25/08/2022",
    "24/07/2022",
    "23/07/2022",
  ];
  let arrAssingment = ["Sam", "Jhon", "Mike", "David", "Nick","Tim", "Gray", "Mike", "David", "Nick","Sam", "Jhon", "Mike", "David", "Kyle","Sam", "Jhon", "Mike", "David", "Nick"];


  localStorage.removeItem("TicketList");
  for (let index = 0; index < arrSummarys.length; index++) {
    const Ticket = {
      ID: arrID[index],
      Summary: arrSummarys[index],
      Description: arrDescription[index],
      Identifier: arrIdentifier[index],
      Project: arrProjects[index],
      Priority: arrPriority[index],
      Status: arrStatus[index],
      TargetDate: arrTargetDate[index],
      DateLog: arrDateLog[index],
      Assingment: arrAssingment[index],
      actualResolutionDate: "",
      ResolutionSummary: "",
    };

    TicketList.push(Ticket);
    TicketList = TicketList.concat(
      JSON.parse(window.localStorage.getItem("TicketList") || "[]")
    );
  }
  window.localStorage.setItem("TicketList", JSON.stringify(TicketList));
  showData();
}

function assignment() {
  let person = "person";
  let personlist = ["Kyle", "jhon", "mike", "dylan"];
  let max = personlist.length-1;
  let min = 0;
  let ID = Math.floor(Math.random() * (max - min + 1) + min);
  person = personlist[ID];
  return person;
}

function getTicket() {
  let TicketList = [];
  TicketList = TicketList.concat(
    JSON.parse(window.localStorage.getItem("TicketList") || "[]")
  );
  return TicketList;
}
function GetID() {
  let TicketList = getTicket();
  let id = 0;
  if (TicketList.length != 0) {
    id = TicketList[TicketList.length - 1].ID;
    return Number(id) + 1;
  }

  return id + 1;
}
function setTicket() {
  let issueSummary = document.getElementById("inputSummary").value;
  let issueDescription = document.getElementById("inputDescription").value;
  let issueIdentifier = document.getElementById("inputIdentifier").value;
  let issueProject = document.getElementById("inputProject").value;
  let issuePriority = document.getElementById("inputPriority").value;
  if (
    issueSummary != "" &&
    issueDescription != "" &&
    issueIdentifier != "" &&
    issueProject != "" &&
    issuePriority != ""
  ) {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear(today);
    today = mm + "/" + dd + "/" + yyyy;

    let ResolutionDate = new Date();
    let TargetDate=(issuePriority=="Low")?3:(issuePriority=="Medium")?2:1
    let tt = String(ResolutionDate.getDate() + TargetDate).padStart(2, "0");
    ResolutionDate = mm + "/" + tt + "/" + yyyy;

    const Ticket = {
      ID: GetID(),
      Summary: issueSummary,
      Description: issueDescription,
      Identifier: issueIdentifier,
      Project: issueProject,
      Status: "Open",
      DateLog: today,
      Priority: issuePriority,
      TargetDate: ResolutionDate,
      Assingment: assignment(),
      actualResolutionDate: "",
      ResolutionSummary: "not done",
    };

    let TicketList = [];
    TicketList = TicketList.concat(
      JSON.parse(window.localStorage.getItem("TicketList") || "[]")
    );

    TicketList.push(Ticket);
    window.localStorage.setItem("TicketList", JSON.stringify(TicketList));
    alert("Ticket Saved");
    showData();
  } else alert("Sorry feild empty");
}

//The function to search projects

function myFunction(column) {
  let input, filter, table, theRow, theDataElement, i, txtValue;
  input = document.querySelector(".btnShowSearch");
  filter = input.value.toLowerCase();
  table = document.getElementById("project-table");
  theRow = table.getElementsByTagName("tr");

  for (i = 0; i < theRow.length; i++) {
    theDataElement = theRow[i].getElementsByTagName("td")[column];
    if (theDataElement) {
      txtValue = theDataElement.textContent.toLowerCase() || theDataElement.innerText;
      if (txtValue.indexOf(filter) > -1) {
        theRow[i].style.display = "";
      } else {
        theRow[i].style.display = "none";
      }
    }
  }
}

//The pagination function

let thetable = "#project-table";
$("#maxRows").on("click", function () {
  $(".pagination").html("");
  let trnum = 0;
  let maxRows = parseInt($(this).val());
  let totalRows = $(thetable + " tbody tr").length;
  $(thetable + " tr:gt(0)").each(function () {
    trnum++;
    if (trnum > maxRows) {
      $(this).hide();
    }
    if (trnum <= maxRows) {
      $(this).show();
    }
  });
  if (totalRows > maxRows) {
    let pagenum = Math.ceil(totalRows / maxRows);
    for (let i = 1; i <= pagenum; ) {
      $('.pagination').append('<li class = "page-item" data-page="'+i+'"><a class = "page-link"<span>'+ i++ +'</span></a>\</li>').show();
      
    }
  }
  $(".pagination li:first-child").addClass("active");
  $(".pagination li").on("click", function () {
    let pageNum = $(this).attr("data-page");
    let trIndex = 0;
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    $(thetable+" tr:gt(0)").each(function () {
      trIndex++;
      if (trIndex > (maxRows * pageNum) || trIndex <= ((maxRows * pageNum) - maxRows)){
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});


function memeberView()
{
  let login = JSON.parse(window.localStorage.getItem("login"));
  if ((login.username=="Administration"))
  {
    window.open("Members.html");
    window.close("Ticket.html");
  }
}