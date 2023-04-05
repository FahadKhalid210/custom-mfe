import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseListComponent from "./component/CourseListComponent";


function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function handleSearch () {
    const apiUrl = "http://local.overhang.io:8000/api/course_list/fahad2/?name="+ searchQuery;
    const response = await axios.get(
        apiUrl,
    );
    setCourses(response.data);
  }


  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get(
        "http://local.overhang.io:8000/api/course_list/fahad2/",
      );
      setCourses(response.data);
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses List</h1>
      <br />
      <input 
      type="text"
      value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
      <br /><br />
      <CourseListComponent courses={courses} />
    </div>
  );
}

export default CourseList;
