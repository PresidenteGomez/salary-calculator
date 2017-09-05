$(document).ready(nowReady);
function nowReady() {
    //event 'click' calls the function "costOfOperation" everytime the button w/ ID "addInfoButton" is clicked
    $('#addInfoButton').on('click', costOfOperation);
}
//storing obtained employee information
var employeeInformationArray = [];

//total costs starting out
var totalSalaryCosts = 0;
var totalMonthSalary = 0; 

//function expression for logic
var costOfOperation = function() {
    //creating a new object that uses the object constructor
    var employeeProfile = new Person($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idNumberInput').val(), $('#jobTitleInput').val(), $('#annualSalaryInput').val());
    //push employee attributes into "employeeInformationArray"
    // employeeInformationArray.push(employeeProfile);
    //total costs from salary
    totalSalaryCosts += Number(employeeProfile.annualSalary);
    //monthly totals from salary
    totalMonthSalary = Math.round(totalSalaryCosts / 12);
    //calculating monthly total costs of employees
    $('.totalSalary').text(totalMonthSalary);
    //targets the section that has class="employeeContainer" and adds all of the typed input into the DOM
    $('.employeeContainer').append('<p>Name:'+ ' ' + $('#firstNameInput').val() + ' ' + $('#lastNameInput').val() + '' + 
        '<br>ID Number:' + ' ' + $('#idNumberInput').val() + '' + 
        '<br>Job Title:' + ' ' + $('#jobTitleInput').val() + '' + 
        '<br>Annual Salary:' + ' ' + '$'+  $('#annualSalaryInput').val() + 
        '<br>Monthly Total Cost for this Employee:' + ' $' + Math.round($('#annualSalaryInput').val() / 12) + '</p>');
    //clears the input fields so a new employee can be added
        $('.info').val(''); 
    }

//object constructor of employee information
function Person(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    employeeInformationArray.push(this);
} // end of "Person" constructor
