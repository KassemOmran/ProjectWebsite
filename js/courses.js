$(document).ready(function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const coursesContainer = $("#coursestBody");
    const filterSelect = $('#course-filter');

    function displayCourses(filter) {
        coursesContainer.empty();

        if (user && user.courses) {
            let filteredCourses;
            switch (filter) {
                case 'current':
                    filteredCourses = user.courses.filter(course => course.status === "current");
                    break;
                case 'obtained':
                    filteredCourses = user.courses.filter(course => course.status === "obtained");
                    break;
                case 'all':
                default:
                    filteredCourses = user.courses;
                    break;
            }

            if (filteredCourses.length > 0) {
                filteredCourses.forEach(course => {
                    coursesContainer.append(`
                        <tr>
                            <td>${course.code}</td>
                            <td>${course.description}</td>
                            <td>${course.semester}</td>
                            <td>${course.credits}</td>
                        </tr>
                    `);
                });
            } else {
                coursesContainer.append('<p>No courses found for the selected filter.</p>');
            }
        } else {
            coursesContainer.append('<p>No courses available.</p>');
        }
    }
    displayCourses('current');
    filterSelect.on('change', function () {
        var filter = $(this).val();
        displayCourses(filter);
    });
});
