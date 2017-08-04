$(function () {
  var operation = "C"; 
  var selected_index = -1; 
  var tblPersons = localStorage.getItem("tblPersons"); 
  tblPersons = JSON.parse(tblPersons); 
  if (tblPersons === null) 
      tblPersons = [];

  function Create() {
    
    var person = JSON.stringify({
      No: $("#txtNo").val(),
      Name: $("#txtName").val(),
      Position: $("#txtPosition").val(),
      Age: $("#txtAge").val(),
      College: $("#txtCollege").val()
    }); 
    
    tblPersons.push(person);
    
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Player Identification Successfully Added"); 
    return true;
  }

  function Edit() {
    
    tblPersons[selected_index] = JSON.stringify({
        No: $("#txtNo").val(),
        Name: $("#txtName").val(),
        Position: $("#txtPosition").val(),
        Age: $("#txtAge").val(),
        College: $("#txtCollege").val()
    });
    
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Player Identification Successfully Edited"); 
    return true;
  }

  function Delete() {
    
    tblPersons.splice(selected_index, 1); 
    
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Player Identification Successfully Deleted"); 
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +            
            "<th>No</th>" +
            "<th>Name</th>" +
            "<th>Position</th>" +
            "<th>Age</th>" +
            "<th>College</th>" +
            "<th>Command</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "<thead>" +
            "<td>Coach : Steve Kerr </td>" +
            "</thead>" 
            ); 
    for (var i in tblPersons) {
        var per = JSON.parse(tblPersons[i]);
        $("#tblList tbody").append("<tr>" +                    
                "<td>" + per.No + "</td>" +
                "<td>" + per.Name + "</td>" +
                "<td>" + per.Position + "</td>" +
                "<td>" + per.Age + "</td>" +
                "<td>" + per.College + "</td>" +                    
                "<td><img src='edit1.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='delete1.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                "</tr>"
                );
    } 
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  }); 
  
  List();

  $(".btnEdit").bind("click", function () {
    operation = "E"; 
    
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    
    var per = JSON.parse(tblPersons[selected_index]); 
    $("#txtNo").val(per.No);
    $("#txtName").val(per.Name);
    $("#txtPosition").val(per.Position);
    $("#txtAge").val(per.Age);
    $("#txtCollege").val(per.College);
    $("#txtNo").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $(".btnDelete").bind("click", function () {

    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); 
    List(); 
  });
});

