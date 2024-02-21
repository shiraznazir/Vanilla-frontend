// let arr = [{ id: 1, name: "Shiraz Nazir", mobNo: "9837305499" }];

// document.querySelector("#myTable tbody").innerHTML = arr.map(
//   (user) =>
//     `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.mobNo}</td></tr>`
// );

var jsonDataEmployee = [
  {
    EmployeeID: "3",
    EmployeeName: "Mark Zuckerberg",
    EmployeeCode: "EC0001",
  },
  {
    EmployeeID: "1",
    EmployeeName: "Sartaj Husain",
    EmployeeCode: "EC0002",
  },
  {
    EmployeeID: "2",
    EmployeeName: "Bil Gates ",
    EmployeeCode: "EC0003",
  },
];

window.onload = JSONToHTMLTable(jsonDataEmployee, "tblEmployee");

function JSONToHTMLTable(jsonData, elementToBind) {
  //This Code gets all columns for header   and stored in array col
  var col = [];
  for (var i = 0; i < jsonData.length; i++) {
    for (var key in jsonData[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  //This Code creates HTML table
  var table = document.createElement("table");
  table.style.width = "60vw";
  //This Code getsrows for header creader above.
  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    th.style.width = "33%";
    th.style.textAlign = "left";
    th.style.color = "#ffffff";
    tr.appendChild(th);
  }

  //This Code adds data to table as rows
  for (var i = 0; i < jsonData.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.style.width = "33%";
      tabCell.innerHTML = jsonData[i][col[j]];
    }
  }

  const sortByEmployeeId = document.createElement("button");
  const sortByEmployeeName = document.createElement("button");
  const sortByEmployeeCode = document.createElement("button");

  sortByEmployeeId.innerHTML = "Sort By Emplyee Id";
  sortByEmployeeName.innerHTML = "Sort By Emplyee Name";
  sortByEmployeeCode.innerHTML = "Sort By Emplyee Code";

  sortByEmployeeId.style.margin = "10px";
  sortByEmployeeId.style.padding = "10px";
  sortByEmployeeId.style.borderRadius = "10px";
  sortByEmployeeId.style.fontSize = "15px";
  sortByEmployeeId.style.cursor = "pointer";

  sortByEmployeeName.style.margin = "10px";
  sortByEmployeeName.style.padding = "10px";
  sortByEmployeeName.style.borderRadius = "10px";
  sortByEmployeeName.style.fontSize = "15px";
  sortByEmployeeName.style.cursor = "pointer";

  sortByEmployeeCode.style.margin = "10px";
  sortByEmployeeCode.style.padding = "10px";
  sortByEmployeeCode.style.borderRadius = "10px";
  sortByEmployeeCode.style.fontSize = "15px";
  sortByEmployeeCode.style.cursor = "pointer";

  sortByEmployeeId.onclick = function () {
    jsonDataEmployee.sort((a, b) => a.EmployeeID - b.EmployeeID);
    JSONToHTMLTable(jsonDataEmployee, "tblEmployee");
  };
  sortByEmployeeName.onclick = function () {
    jsonDataEmployee.sort((a, b) => {
      if (a.EmployeeName < b.EmployeeName) return -1;
      if (a.EmployeeName > b.EmployeeName) return 1;
      return 0;
    });
    JSONToHTMLTable(jsonDataEmployee, "tblEmployee");
  };
  sortByEmployeeCode.onclick = function () {
    console.log("Emplyee Code", jsonDataEmployee);
    jsonDataEmployee.sort((a, b) => {
      if (a.EmployeeCode < b.EmployeeCode) return -1;
      if (a.EmployeeCode > b.EmployeeCode) return 1;
      return 0;
    });
    JSONToHTMLTable(jsonDataEmployee, "tblEmployee");
  };

  //This Code gets the all columns for header
  var divContainer = document.getElementById(elementToBind);
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
  divContainer.appendChild(sortByEmployeeId);
  divContainer.appendChild(sortByEmployeeName);
  divContainer.appendChild(sortByEmployeeCode);
}
