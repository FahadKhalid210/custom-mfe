import React from "react";
import { getConfig } from "@edx/frontend-platform";
import '../index.scss';

function CourseListComponent({ courses }) {
  const lmsURL = getConfig().LMS_BASE_URL
  return (
    <div>
      {courses.map(course => (
        <div className="main-class">
        <img src={lmsURL + course.img} />
        <div>
          <h3>{course.name}</h3>
        </div>
      </div>
      ))}
    </div>
  );
}

export default CourseListComponent;
