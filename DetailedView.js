function Save() {
  if (confirm("Are you sure you want to save changes")) {
  var Ticket = JSON.parse(window.localStorage.getItem("TicketView"));

  const TicketEdit = {
    ID: Ticket.ID,
    Summary: Ticket.Summary,
    Description: this.document.getElementById(
      "Project-DetailedView-Description"
    ).value,
    Identifier: this.document.getElementById("Who-Identified-the-issue").value,
    Project: this.document.getElementById("Project-related-To-Issue").value,
    Status: this.document.getElementById("Status").value,
    DateLog: this.document.getElementById("Date-Identified").value,
    Priority: this.document.getElementById("Priority").value,
    TargetDate: this.document.getElementById("Target-Resolution-Date").value,
    Assingment: this.document.getElementById("Assigned-to").value,
    actualResolutionDate: this.document.getElementById("Resolution-Date").value,
    ResolutionSummary: this.document.getElementById("Resolution-Summary").value,
  };
  var TicketList = [];
  TicketList = TicketList.concat(
    JSON.parse(window.localStorage.getItem("TicketList") || "[]")
  );
  for (let index = 0; index < TicketList.length; index++) {
    const element = TicketList[index];
    if (element.ID == Ticket.ID) {
      TicketList.splice(index, 1, TicketEdit);
    }
  }

  window.localStorage.setItem("TicketList", JSON.stringify(TicketList));
  alert("Ticket Saved");
}
}
function Back() {
  window.open("Ticket.html");
  window.close("DetailedView.html");
}
function Edit() {
  let login = JSON.parse(window.localStorage.getItem("login"));
  if (login.username == "Administration") {
    var disabled = this.document.getElementById(
      "Project-DetailedView-Description"
    ).disabled;
    this.document.getElementById("Who-Identified-the-issue").disabled;
    this.document.getElementById("Date-Identified").disabled;
    this.document.getElementById("Project-related-To-Issue").disabled;
    this.document.getElementById("Assigned-to").disabled;
    this.document.getElementById("Resolution-Summary").disabled;
    this.document.getElementById("Status").disabled;
    this.document.getElementById("Priority").disabled;
    this.document.getElementById("Target-Resolution-Date").disabled;
    this.document.getElementById("Resolution-Date").disabled;

    if (disabled) {
      this.document.getElementById(
        "Project-DetailedView-Description"
      ).disabled = false;
      this.document.getElementById("Who-Identified-the-issue").disabled = false;
      this.document.getElementById("Date-Identified").disabled = false;
      this.document.getElementById("Project-related-To-Issue").disabled = false;
      this.document.getElementById("Assigned-to").disabled = false;
      this.document.getElementById("Resolution-Summary").disabled = false;
      this.document.getElementById("Status").disabled = false;
      this.document.getElementById("Priority").disabled = false;
      this.document.getElementById("Target-Resolution-Date").disabled = false;
      this.document.getElementById("Resolution-Date").disabled = false;
    } else {
      this.document.getElementById(
        "Project-DetailedView-Description"
      ).disabled = true;
      this.document.getElementById("Who-Identified-the-issue").disabled = true;
      this.document.getElementById("Date-Identified").disabled = true;
      this.document.getElementById("Project-related-To-Issue").disabled = true;
      this.document.getElementById("Assigned-to").disabled = true;
      this.document.getElementById("Resolution-Summary").disabled = true;
      this.document.getElementById("Status").disabled = true;
      this.document.getElementById("Priority").disabled = true;
      this.document.getElementById("Target-Resolution-Date").disabled = true;
      this.document.getElementById("Resolution-Date").disabled = true;
    }
  } else {
    var disabled = this.document.getElementById(
      "Project-DetailedView-Description"
    ).disabled;
    if (disabled) {
      this.document.getElementById(
        "Project-DetailedView-Description"
      ).disabled = false;
      this.document.getElementById("Resolution-Summary").disabled = false;
      this.document.getElementById("Status").disabled = false;
      this.document.getElementById("Priority").disabled = false;
      this.document.getElementById("Resolution-Date").disabled = false;
    } else {
      this.document.getElementById(
        "Project-DetailedView-Description"
      ).disabled = true;
      this.document.getElementById("Resolution-Summary").disabled = true;
      this.document.getElementById("Status").disabled = true;
      this.document.getElementById("Priority").disabled = true;

      this.document.getElementById("Resolution-Date").disabled = true;
    }
  }
}
window.onload = () => {};
window.addEventListener("load", function () {
  var Ticket = JSON.parse(window.localStorage.getItem("TicketView"));

  this.document.querySelector(
    ".DetailedViewShortHeading"
  ).innerHTML = `Ticket: ${Ticket.ID}`;

  this.document.getElementById("Project-DetailedView-Description").value =
    Ticket.Description;
  this.document.getElementById("Who-Identified-the-issue").value =
    Ticket.Identifier;
  this.document.getElementById("Date-Identified").value = Ticket.DateLog;
  this.document.getElementById("Project-related-To-Issue").value =
    Ticket.Project;
  this.document.getElementById("Assigned-to").value = Ticket.Assingment;
  this.document.getElementById("Resolution-Summary").value =
    Ticket.ResolutionSummary;
  this.document.getElementById("Status").value = Ticket.Status;
  this.document.getElementById("Priority").value = Ticket.Priority;
  this.document.getElementById("Target-Resolution-Date").value =
    Ticket.TargetDate;
  this.document.getElementById("Resolution-Date").value =
    Ticket.actualResolutionDate;
});

// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');
letters+='bug';
// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(33, 32, 32, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#f5f5f5';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);
