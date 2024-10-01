import React, { useState } from 'react';

const StudentDetails = () => {
  // Initial student data
  const [students, setStudents] = useState([
    { name: 'Akash Kapoor', percentage: 48 },
    { name: 'Ashwin Singh', percentage: 58 },
    { name: 'Akeel Ahmed', percentage: 31 },
    { name: 'Kaif Khan', percentage: 85 },
    { name: 'Rita Kaif', percentage: 90 },
  ]);

  // Function to determine pass/fail
  const isPass = (percentage) => percentage >= 50;

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>Student Details</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Student Name</th>
            <th style={styles.header}>Total Percentage</th>
            <th style={styles.header}>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.cell}>{student.name}</td>
              <td style={styles.cell}>{student.percentage}</td>
              <td style={styles.cell}>
                <button style={isPass(student.percentage) ? styles.passButton : styles.failButton}>
                  {isPass(student.percentage) ? 'Pass' : 'Fail'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for the dashboard
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

export default StudentDetails;