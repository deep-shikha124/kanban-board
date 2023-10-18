import React, { useEffect } from "react";

const TicketArray = (arr) => {
  useEffect(() => {
    console.log(arr.arr);
  }, [arr]);
  return (
    <div>
      {arr.arr.map((item) => (
        <div>
          <h3>{item.userId}</h3>
          <h5>{item.title}</h5>
          {/* print all the tags, it is inside tag array */}
          {item.tag.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketArray;
