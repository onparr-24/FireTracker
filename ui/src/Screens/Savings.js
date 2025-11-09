import React from 'react';

function Savings() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Fire Tracker</h1>
      <p>
        Track your savings, checking accounts, and progress towards financial independence.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ margin: '0 1rem', padding: '1rem 2rem', fontSize: '1rem' }}>
          View Checking
        </button>
      </div>
    </div>
  );
}

export default Savings;