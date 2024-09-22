import React from 'react';

const KanbanCard = ({ ticket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return "/SVG - Urgent Priority colour.svg"; // Urgent
      case 3: return "/Img - High Priority.svg";          // High
      case 2: return "/Img - Medium Priority.svg";        // Medium
      case 1: return "/Img - Low Priority.svg";           // Low
      case 0: return "/No-priority.svg";                  // No Priority
      default: return "";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Backlog": return "/Backlog.svg";
      case "In Progress": return "/in-progress.svg";
      case "Done": return "/Done.svg";
      case "Cancelled": return "/Cancelled.svg";
      default: return "";
    }
  };

  return (
    <div className="kanban-card">
      <h4>{ticket.title}</h4>
      <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" />
      <img src={getStatusIcon(ticket.status)} alt="Status Icon" />
      <p>Status: {ticket.status}</p>
      <p>Assigned to: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default KanbanCard;
