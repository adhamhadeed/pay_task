import React from "react";
import PhotosArea from "./PhotosArea";

const TableBody = ({ albums, headers, toggleAlbumId }) => {
  const renderCell = (header, dataItem) => {
    if (header.render) return header.render(dataItem);
    return dataItem[header.path];
  };

  return (
    <tbody>
      {albums.map((album) => (
        <tr key={album.id}>
          <td colSpan={headers.length}>
            <div className="cell">
              <div className="cell__content">
                <div className="cell__content__item">
                  <div className="cell__content__item__row">
                    {headers.map((header) => (
                      <div
                        key={header.path}
                        className="cell__content__item__data"
                      >
                        {renderCell(header, album)}
                      </div>
                    ))}
                  </div>
                  {toggleAlbumId === album.id && (
                    <div className="cell__content__item__photos">
                      <PhotosArea toggleAlbumId={toggleAlbumId} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
