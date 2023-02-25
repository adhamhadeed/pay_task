import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import { getHeaders } from "../table/utils/headers";

import "./index.scss";
import { formatData } from "./utils/helpers";

const Albums = () => {
  const [data, setData] = useState([]);

  const [toggleAlbumId, setIsToggleAlbumId] = useState(-1);

  const fetchData = async () => {
    try {
      const albumsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const albums = await albumsResponse.json();
      const users = await usersResponse.json();

      const formattedData = formatData(albums, users);
      setData(formattedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleButton = (albumId) => {
    setIsToggleAlbumId((prevToggledAlbumId) =>
      albumId === prevToggledAlbumId ? -1 : albumId
    );
  };

  const getTableHeaders = getHeaders(toggleButton, toggleAlbumId);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="albums">
      <Table
        headers={getTableHeaders}
        albums={data}
        toggleAlbumId={toggleAlbumId}
      />
    </div>
  );
};

export default Albums;
