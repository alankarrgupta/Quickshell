import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanBoard = ({ tickets, groupBy }) => {
  if (!Array.isArray(tickets)) {
    return <div>No tickets available</div>;
  }

  const groupTickets = () => {
    switch (groupBy) {
      case 'user':
        return groupByUser(tickets);
      case 'priority':
        return groupByPriority(tickets);
      case 'status':
      default:
        return groupByStatus(tickets);
    }
  };

  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
      return acc;
    }, {});
  };

  const groupByUser = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      (acc[ticket.user] = acc[ticket.user] || []).push(ticket);
      return acc;
    }, {});
  };

  const groupByPriority = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      (acc[ticket.priority] = acc[ticket.priority] || []).push(ticket);
      return acc;
    }, {});
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-container">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {groupedTickets[group].map(ticket => (
            <KanbanCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
