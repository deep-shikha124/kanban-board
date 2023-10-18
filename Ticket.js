import React, { useEffect } from "react";
import TicketArray from "./TicketArray";

const Ticket = ({ ticket }) => {
  useEffect(() => {
    // iterate over the ticket object and print the key and not the value
    Object.keys(ticket).forEach((key) => {
      console.log(key);
    });
  }, [ticket]);

  return (
    <div className="ticket">
      {Object.keys(ticket).map(
        (key) => (
          <div>
            <h1>{key}</h1>
            <TicketArray arr={ticket[key]} />
          </div>
        ),
        [ticket]
      )}
    </div>
  );
};

export default Ticket;
