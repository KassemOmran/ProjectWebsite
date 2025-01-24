$(document).ready(function(){
    const user=JSON.parse(localStorage.getItem('loggedInUser'));
    const coursesTableBody = $("#markstBody");
    user.courses.forEach(course => {
        coursesTableBody.append(`
            <tr>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.semester}</td>
                <td>${course.mark}</td>
            </tr>
            `)
    })
})