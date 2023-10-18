import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";

function KanbanBoard({ tickets, sortingOption, groupingOption }) {
  const [groupedTickets, setGroupedTickets] = useState({});

  const groupTickets = async () => {
    switch (groupingOption) {
      case "User":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        for (var i = 0; i < len; i++) {
          var user = data[i].userId;
          if (!groupedData[user]) {
            groupedData[user] = [];
          }
          groupedData[user].push(data[i]);
        }
        setGroupedTickets(groupedData);
        break;
      case "Status":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        for (var i = 0; i < len; i++) {
          var status = data[i].status;
          if (!groupedData[status]) {
            groupedData[status] = [];
          }
          groupedData[status].push(data[i]);
        }
        setGroupedTickets(groupedData);
        break;
      case "Priority":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        for (var i = 0; i < len; i++) {
          var priority = data[i].priority;
          if (!groupedData[priority]) {
            groupedData[priority] = [];
          }
          groupedData[priority].push(data[i]);
        }
        break;
      default:
        groupedData = { "All Tickets": tickets };
        break;
    }
    setGroupedTickets(groupedData);
  };

  useEffect(() => {
    groupTickets();
  }, [tickets, groupingOption]);

  useEffect(() => {
  }, [groupedTickets]);

  return (
    <div>
      <Ticket ticket={groupedTickets} />
    </div>
  );
}

export default KanbanBoard;
