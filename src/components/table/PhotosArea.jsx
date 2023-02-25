import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ImgTemplate from "../img-template/ImgTemplate";
import Modal from "../modal/Modal";

/**
 * PhotosArea, is responsibe for the photos data,
 * thus, photos data will be manage here
 */
const PhotosArea = ({ toggleAlbumId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [modalData, setModaData] = useState(null);

  const fetchPhotos = async () => {
    try {
      setIsLoading(true);
      const photos = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${toggleAlbumId}/photos?_start=0&_limit=12`
      );
      let photosResponse = await photos.json();
      setPhotos(photosResponse);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (toggleAlbumId !== -1) fetchPhotos();
  }, [toggleAlbumId]);

  const handleRemoveImg = (photoId) => {
    const newPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(newPhotos);
  };

  const handleCloseModal = () => setModaData(null);

  const handleOpenModal = useCallback((url) => setModaData(url), []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...photos];
    const [renderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, renderedItem);
    setPhotos(items);
  };

  if (loading) return <div>loading...</div>;

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {photos?.map((photo, idx) => (
                <Draggable
                  key={photo.id.toString()}
                  draggableId={photo.id.toString()}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ImgTemplate
                        {...photo}
                        onRemoveImg={handleRemoveImg}
                        openModal={handleOpenModal}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Modal modalData={modalData} onClose={handleCloseModal}>
        <img src={modalData} alt="img" />
      </Modal>
    </>
  );
};

export default PhotosArea;
