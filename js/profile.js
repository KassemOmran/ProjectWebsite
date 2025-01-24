$(document).ready(function () {
    const user =JSON.parse(localStorage.getItem('loggedInUser'));
    $('#st-name').append(user.name);
    $('#st-id').append(user.id)
    $('#st-major').append(user.major)
    $('#st-year').append(user.year)
})