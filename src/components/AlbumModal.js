import React from 'react';
import Modal from 'react-modal';
import "../styles/product.css"
import Disney from "./Disney"
import Europe from "./Europe"

Modal.setAppElement('#root')


const customStyles = {
  content : {
    top: "17%",
    left: "28.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "560px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: "9999"
  }
};
const AlbumModal = (props) => (
  <div data-delighter >
    <Modal
      closeTimeoutMS={300}
      isOpen={props.isOpen}
      onRequestClose={() => props.toggleModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
    {
      props.albumId == 1 ?
      <Europe onClose={() => props.toggleModal()}/> : 
      props.albumId == 2 ?
      <Disney onClose={() => props.toggleModal()}/> : null
    }
    </Modal>
  </div>
);


export default AlbumModal