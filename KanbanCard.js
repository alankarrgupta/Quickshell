import React from 'react';

const KanbanCard = ({ ticket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return "/icons_FEtask/SVG - Urgent Priority colour.svg"; // Urgent
      case 3: return "/icons_FEtask/Img - High Priority.svg";          // High
      case 2: return "/icons_FEtask/Img - Medium Priority.svg";        // Medium
      case 1: return "/icons_FEtask/Img - Low Priority.svg";           // Low
      case 0: return "/icons_FEtask/No-priority.svg";                  // No Priority
      default: return "";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Backlog": return "/icons_FEtask/Backlog.svg";
      case "In Progress": return "/icons_FEtask/in-progress.svg";
      case "Done": return "/icons_FEtask/Done.svg";
      case "Cancelled": return "/icons_FEtask/Cancelled.svg";
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
