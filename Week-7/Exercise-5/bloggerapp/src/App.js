import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState('book');
  const [showCourses, setShowCourses] = useState(true);
  
  const courses = ['React Basics', 'Advanced React', 'React Native'];

  // 1. Conditional rendering using if-else
  const renderSection = () => {
    if (section === 'book') return <BookDetails />;
    else if (section === 'blog') return <BlogDetails />;
    else return <CourseDetails />;
  };

  // 2. Element variable example
  let detailComponent;
  if (section === 'blog') {
    detailComponent = <BlogDetails />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>📘 Blogger App</h1>

      <div>
        <button onClick={() => setSection('book')}>Show Book</button>
        <button onClick={() => setSection('blog')}>Show Blog</button>
        <button onClick={() => setSection('course')}>Show Course</button>
        <button onClick={() => setShowCourses(!showCourses)}>
          Toggle Course List
        </button>
      </div>

      <hr />

      {/* 1. if-else function call */}
      {renderSection()}

      {/* 2. Element variable */}
      {/* {detailComponent} */}

      {/* 3. Ternary operator */}
      {/* {section === 'book' ? <BookDetails /> : <BlogDetails />} */}

      {/* 4. Short-circuit && operator */}
      {showCourses && (
        <div>
          <h3>🗂 List of Courses</h3>
          <ul>
            {/* 5. Rendering list using map() with keys */}
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
