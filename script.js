console.log('js');
$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been activated!');
    //event listeners
    $('#addInfoButton').on('click', infoStorage);
}

// function grabEmployeeInfo() {
//     //var $container = $(this).data('employeeInfo');
//     $('.container').append($('<div class=new-info>'));
//     console.log(grabEmployeeInfo);
// }


function infoStorage(){
    //get employee information
    //use it to create new item
    new Item($('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#jobTitle').val(), $('#annualSalary').val());
    //push employee inputs into constructor
    //reset inputs
    $('#firstName').val('');
    $('#lastName').val(''); 
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function Item(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    // once created add to inventory
    employeeInformation.push(this);
} // end item constructor
var employeeInformation = [];
console.log(employeeInformation);