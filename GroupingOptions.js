import React from 'react';

const GroupingOptions = ({ groupBy, setGroupBy }) => {
  return (
    <div>
      <button onClick={() => setGroupBy('status')}>Group by Status</button>
      <button onClick={() => setGroupBy('user')}>Group by User</button>
      <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
    </div>
  );
};

export default GroupingOptions;
