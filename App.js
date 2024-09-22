import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingOptions from './components/GroupingOptions';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default grouping by status

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        console.log("API Response:", data); // Add this line to check the response
        setTickets(data.tickets || data); // Ensure `data` is an array or process it if wrapped
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);
  

  return (
    <div>
      <GroupingOptions groupBy={groupBy} setGroupBy={setGroupBy} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} />
    </div>
  );
};

export default App;
