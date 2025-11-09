import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Fire Tracker</h1>
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button}
          onClick={() => navigate('/Savings')}
        >
          View Savings
        </button>
        <button style={styles.button}>
          View Checking
        </button>
        <button style={styles.button}>
          View Investments (Post Tax)
        </button>
        <button style={styles.button}>
          View Investments (Tax Advantaged)
        </button>
        <button style={styles.button}>
          View Cryptocurrency
        </button>
        <button style={styles.button}>
          View Real Estate
        </button>
        <button style={styles.button}>
          View Debt
        </button>
        <button style={styles.button}>
          View Monthly Expenses
        </button>
        <button style={styles.button}>
          View Income
        </button>
        <button style={styles.button}>
          View Stats
        </button>
        <button style={styles.button}>
          View Rules
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#ffffffff',
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '1rem',
    gap: '1rem'
  },
  button: {
    margin: '0.5rem',
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#c0c0c0',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  }
};

export default Home;