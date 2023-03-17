/* Function to get the list of courses from the json file
 * returns an array of courses to be used by other functions
 */ 
function getCourses() {
        let data = fetch('/js/courses.json').then((data) => data.json()).then((json) => json.courses).catch((e) => console.error(e));
        return data;
}

/* Function to get a single course from a course ID.
 * This will return a whole course object (code, desc, topics)
 * and is called from the course shortcode
 */ 
function getCourseById(courses, courseId) {
    for (let i in courses) {
        if (courseId === courses[i].code) {
            return courses[i];
        }
    }
}


