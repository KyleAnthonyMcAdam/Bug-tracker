let btnInsert = document.querySelector(".theInsertButton");
let btnClose = document.querySelector(".theCloseButton");
let btnNew = document.querySelector(".theNewButton");
let btnClear = document.querySelector(".theClearButton");
let Modal = document.getElementById("theform");
let blurModal = document.querySelector("#blurrContainer");
let table = document.querySelector("#member-table");
let nameInput = document.querySelector("#Member-Name");
let descriptionInput = document.querySelector("#Member-Surname");
let memeberInput = document.querySelector("#Member-Email");
let userInput = document.querySelector("#UserName");
let passwordInput = document.querySelector("#Password")
let arr = [];

// The insert button

btnInsert.addEventListener("click", () => {
  getData();
  let theID = GetID();
  arr.push({
    MemberiD: theID,
    Name: document.querySelector("#Member-Name").value,
    Surname: document.querySelector("#Member-Surname").value,
    Email: document.querySelector("#Member-Email").value,
    Username: document.querySelector("#UserName").value,
    Password: document.querySelector("#Password").value,
  });
  localStorage.setItem("member", JSON.stringify(arr));
  showData();
});

function GetID() {
  let ProjectList = getData();
  let id = 0;  
  if (ProjectList.length != 0) {
    id = ProjectList[ProjectList.length - 1].MemberiD;
    return Number(id) + 1;
  }

  return id + 1;
}

// Get items from the local storage

function getData() {
  let str = localStorage.getItem("member");
  if (str != null) arr = JSON.parse(str);

  return arr;
}

// The Reset button PS: Change name to reset all

btnClear.addEventListener("click", () => {
  localStorage.removeItem("member");
  arr = [];
  showData();
});

//1. Function to load data from local storage after each refresh
//2. Add only one row to table and not all existing rows again

function showData() {
  getData();
  let template = "";
  table = document.querySelector("#member-table");
  let x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }

  for (let i = 0; i < arr.length; i++) {
    template = `
          <tr>
           <td class = "Rid">${arr[i].MemberiD}</td>
           <td>${arr[i].Name}</td>
           <td>${arr[i].Surname}</td>
           <td>${arr[i].Email}</td>
           <td>${arr[i].Username}</td>
           <td>${arr[i].Password}</td>
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

window.onload = () => {
  arr = [
    {
      MemberiD: (theID = 1),
      Name: "Dylan",
      Surname: "McMaster",
      Email: "578674@student.belgiumcampus.ac.za",
      Username: "McD",
      Password: "Bv123",
    },
    {
      MemberiD: (theID = 2),
      Name: "Kyle",
      Surname: "McAdam",
      Email: "578403@student.belgiumcampus.ac.za",
      Username: "AdamsFamily",
      Password: "19K4",
    },
    {
      MemberiD: (theID = 3),
      Name: "Dewald",
      Surname: "Cronje",
      Email: "578553@student.belgiumcampus.ac.za",
      Username: "Hennie",
      Password: "#Dew3",
    },
    {
      MemberiD: (theID = 4),
      Name: "User",
      Surname: "Unknown",
      Email: "11111@student.belgiumcampus.ac.za",
      Username: "Unknown",
      Password: "Un657",
    },
  ];
  let tet = typeof localStorage.getItem("member")
  if (typeof localStorage.getItem("member") === "object") {
    localStorage.setItem("member", JSON.stringify(arr));
  }
  showData();
};

//Function to delete row when click the garbage button

function hapus(r) {
  let login = JSON.parse(window.localStorage.getItem("login"));
  if (login.username == "Administration") {
    let rowIndex = r.parentNode.parentNode.rowIndex;
    let data = localStorage.getItem("member");
    let myTab = document.getElementById("member-table");
    let objCells = myTab.rows.item(rowIndex).cells;
    let tet = objCells[0].innerText;
    let indexOfObject = arr.findIndex((object) => {
      return object.MemberiD == objCells[0].innerText;
    });
    if (confirm("Are you sure you want to delete Member")) {
    arr.splice(indexOfObject, 1);
    let starter = arr;
    localStorage.setItem("member", JSON.stringify(arr));
    document.getElementById("member-table").deleteRow(rowIndex);
  }
}
}
function myFunction() {
  let input, filter, table, theRow, theDataElement, i, txtValue;
  input = document.querySelector(".btnShowSearch");
  filter = input.value;
  table = document.getElementById("member-table");
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
