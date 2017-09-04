console.log('js');
$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been activated!');
    //event listeners

}

    function grabEmployeeInfo() {
        // var container = document.getElementById('container');
        // container.innerHTML = '';
        var $container = $(this).data('employeeInfo');
        $('#container').addID($container);
        console.log(grabEmployeeInfo);
    }


