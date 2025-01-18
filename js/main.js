$(document).ready(function () {
    const user =JSON.parse(localStorage.getItem('loggedInUser'));
    if(localStorage.getItem('loggedIn')==='true'){
        $('#logout-element').attr('hidden',false)
        $('#logout-dropdown').text(+user.id);
    }
    else{
        $('#login-element').attr('hidden',false)
        $('#si-nav-link').on('click',function(f){
            f.preventDefault();
            window.location.href = 'login.html';
            alert('Please login to access student interface.')
        })
    }
    
    $('#logout-button').on('click',function(e){
        e.preventDefault();
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('loggedInUser')
        window.location.href = 'login.html';
    })
    
})