import React from "react";
import TableBody from "./TableBody";
import TableHeaders from "./TableHeaders";

import "./index.scss";

const Table = ({ albums, headers, toggleAlbumId }) => {
  return (
    <table>
      <TableHeaders headers={headers} />
      <TableBody
        albums={albums}
        headers={headers}
        toggleAlbumId={toggleAlbumId}
      />
    </table>
  );
};

export default Table;
