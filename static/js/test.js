async function getCourses() {
    try {
        let data = await fetch('/js/courses.json');
        let json = await data.json();
        return json
    } catch (e) {
        console.error(e);
    }
}

const courses = await getCourses();


