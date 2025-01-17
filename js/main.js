$(document).ready(function () {
    const user =JSON.parse(localStorage.getItem('loggedInUser'));
    if(localStorage.getItem('loggedIn')==='true'){
        $('#logout-element').attr('hidden',false)
        $('#logout-dropdown').text(+user.id);
    }
    else{
        $('#login-element').attr('hidden',false)
        $('#si-nav-link').attr('href','login.html')
    }
    
    $('#logout-button').on('click',function(e){
        e.preventDefault();
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('loggedInUser')
        window.location.href = 'login.html';
    })
    
})