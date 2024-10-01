import React, { useState } from 'react';

const TeacherDashboard = () => {
  // Initial data
  const [subjects, setSubjects] = useState([
    { name: 'Math', marks: 52 },
    { name: 'Science', marks: 41 },
    { name: 'Health', marks: 83 },
    { name: 'Chemistry', marks: 89 },
    { name: 'English', marks: 46 },
  ]);

  // State to store the new marks input
  const [newMarks, setNewMarks] = useState({});

  // Function to determine pass/fail
  const isPass = (marks) => marks >= 50;

  // Function to handle marks change in input field
  const handleMarksChange = (event, index) => {
    setNewMarks({ ...newMarks, [index]: event.target.value });
  };

  // Function to update the marks
  const handleUpdateMarks = (index) => {
    const updatedSubjects = [...subjects];
    const newMarkValue = parseInt(newMarks[index], 10);

    if (!isNaN(newMarkValue)) {
      updatedSubjects[index].marks = newMarkValue;
      setSubjects(updatedSubjects);
      setNewMarks({}); // Clear the input after updating
    } else {
      alert('Please enter a valid number.');
    }
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>Teacher Dashboard</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Subject</th>
            <th style={styles.header}>Marks</th>
            <th style={styles.header}>Update</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.cell}>{subject.name}</td>
              <td style={styles.cell}>{subject.marks}</td>
              <td style={styles.cell}>
                <input
                  type="number"
                  value={newMarks[index] || ''}
                  onChange={(event) => handleMarksChange(event, index)}
                  placeholder="New Marks"
                  style={styles.input}
                />
                <button
                  style={styles.updateButton}
                  onClick={() => handleUpdateMarks(index)}
                >
                  Update
                </button>
                <button style={isPass(subject.marks) ? styles.passButton : styles.failButton}>
                  {isPass(subject.marks) ? 'Pass' : 'Fail'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for quick implementation
const styles = {
  dashboard: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: '36px',
    color: 'white',
  },
  table: {
    margin: 'auto',
    width: '80%',
    backgroundColor: '#f1f1f1',
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
  },
  row: {
    textAlign: 'left',
  },
  cell: {
    padding: '10px',
  },
  input: {
    padding: '5px',
    marginRight: '10px',
    width: '60px',
  },
  updateButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '5px 15px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  passButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '5px',
  },
  failButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '5px',
  },
};

export default TeacherDashboard;