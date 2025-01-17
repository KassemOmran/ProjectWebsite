$(document).ready(function (){
    $('#login-form').on('submit',function(e){
        e.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url: 'data.json' ,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                const user = data.find(u => u.id === username && u.password == password);
                if(user){
                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('loggedInUser',JSON.stringify(user))
                    window.location.href = 'student-interface.html';
                }
                else {
                    $('#status').text('Invalid credentials. Please try again. ');
                }
            },
            error: function () {
                $('#status').text('Error loading database.');
            }
        })
    })
});