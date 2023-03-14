let btnInsert = document.querySelector(".theInsertButton");
let btnClose = document.querySelector(".theCloseButton");
let btnNew = document.querySelector(".theNewButton");
let btnClear = document.querySelector(".theClearButton");
let btnDefault = document.querySelector(".theDefaultButton")
let Modal = document.getElementById("theform");
let blurModal = document.querySelector("#blurrContainer");
let table = document.querySelector("#project-table");
let nameInput = document.querySelector("#Project-Name");
let descriptionInput = document.querySelector("#Project-Description");
let memeberInput = document.querySelector("#Project-Member");
let arr = [];

// The insert button


btnInsert.addEventListener("click", () => { 
    
  getData();
  let theID = GetID();
  arr.push({
    aID: theID,
    Name: document.querySelector("#Project-Name").value,
    Description: document.querySelector("#Project-Description").value,
    Member: document.querySelector("#Project-Member").value,
  });
  localStorage.setItem("project", JSON.stringify(arr)); 
  showData();
});

function GetID() {
  let ProjectList = getData();
  let id = 0;  
  if (ProjectList.length != 0) {
    id = ProjectList[ProjectList.length - 1].aID;
    return Number(id) + 1;
  }

  return id + 1;
}

// Get items from the local storage

function getData() {
  let str = localStorage.getItem("project");
  if (str != null) arr = JSON.parse(str);

  return arr;
}

// The Reset button PS: Change name to reset all

btnClear.addEventListener("click", () => {
  localStorage.removeItem("project");
  arr = [];
  showData();  
});

//1. Function to load data from local storage after each refresh
//2. Add only one row to table and not all existing rows again

function showData() {
  getData();
  let template = "";
  table = document.querySelector("#project-table");
  let x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }

  for (let i = 0; i < arr.length; i++) {
    template = `
          <tr>
           <td>${arr[i].aID}</td>
           <td>${arr[i].Name}</td>
           <td>${arr[i].Description}</td>
           <td>${arr[i].Member}</td>
           <td><button type="submit" onclick="hapus(this)"><i class="fa fa-trash-o"></i></button></td>
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

btnDefault.addEventListener("click", () => {
  arr = [
    {
      aID: (theID = 1),
      Name: "Bug fixer project",
      Description: "Fixing the button",
      Member: "Dylan",
    },
    {
      aID: (theID = 2),
      Name: "Tickets",
      Description: "Creating the ticket view",
      Member: "Kyle",
    },
    {
      aID: (theID = 3),
      Name: "Linking",
      Description: "Creating the single view",
      Member: "Dewald",
    },
    {
      aID: (theID = 4),
      Name: "Video",
      Description: "Creating new members view",
      Member: "Dylan",
    },
  ];  

  let tet = typeof localStorage.getItem("project");
    
    localStorage.setItem("project", JSON.stringify(arr));
  
  
  showData();
})

window.onload = () => { 

  if(typeof localStorage.getItem("project") != "object"){
    getMembers()
    showData();
  }else{
    getMembers();
  }  
 
};

//Function to delete row when click the garbage button

function hapus(r) {
  let login = JSON.parse(window.localStorage.getItem("login"));
  if (login.username == "Administration") {
    let rowIndex = r.parentNode.parentNode.rowIndex;
    let data = localStorage.getItem("project");
    let myTab = document.getElementById("project-table");
    let objCells = myTab.rows.item(rowIndex).cells;
    let indexOfObject = arr.findIndex((object) => {
      return object.aID == objCells[0].innerText;
    });
    if (confirm("Are you sure you want to delete Project")) {
    arr.splice(indexOfObject, 1);
    let starter = arr;
    localStorage.setItem("project", JSON.stringify(arr));
    document.getElementById("project-table").deleteRow(rowIndex);
    }
  }
}

//Function to search Projects

function SearchFunction() {
  let input, filter, table, theRow, theDataElement, i, txtValue;
  input = document.querySelector(".btnShowSearch");
  filter = input.value;
  table = document.getElementById("project-table");
  theRow = table.getElementsByTagName("tr");

  for (i = 0; i < theRow.length; i++) {
    theDataElement = theRow[i].getElementsByTagName("td")[0];
    if (theDataElement) {
      txtValue = theDataElement.textContent || theDataElement.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        theRow[i].style.display = "";
      } else {
        theRow[i].style.display = "none";
      }
    }
  }
}
function memeberView()
{
  let login = JSON.parse(window.localStorage.getItem("login"));
  if ((login.username=="Administration"))
  {
    window.open("Members.html");
    window.close("Project.html");
  }
}

function getMembers(){
  let str = localStorage.getItem("member");
    if (str != null) arr = JSON.parse(str);
    
    for (let key of arr){
      memeberInput.options.add(new Option(`${key.Name}`, `${key.Name}`))
    }
}
