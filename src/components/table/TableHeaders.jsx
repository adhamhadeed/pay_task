import React from "react";

const TableHeaders = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers?.map(({ title, id }) => (
          <th key={id}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;
