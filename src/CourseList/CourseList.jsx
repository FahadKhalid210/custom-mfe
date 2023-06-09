import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseListComponent from "./component/CourseListComponent";
import { getConfig } from "@edx/frontend-platform";


function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const courseListAPI = getConfig().COURSE_LIST_API_URL;

  async function handleSearch () {
    const apiUrl = courseListAPI + "?name="+ searchQuery;
    const response = await axios.get(
        apiUrl,
    );
    setCourses(response.data.results);
  }


  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get(
        courseListAPI,
      );
      setCourses(response.data.results);
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
