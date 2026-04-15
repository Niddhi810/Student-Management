
    import React, { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [studentsList, setStudentsList] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentsList([...studentsList, student]);

    // Clear form
    setStudent({ name: "", email: "", course: "" });
  };

  // Delete student
  const handleDelete = (index) => {
    const newList = studentsList.filter((_, i) => i !== index);
    setStudentsList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Management Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      <h3>Student List</h3>

      {studentsList.map((stu, index) => (
        <div key={index}>
          <p>
            {stu.name} | {stu.email} | {stu.course}
            <button onClick={() => handleDelete(index)}> Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}


export default App;
