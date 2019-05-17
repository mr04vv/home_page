import React from 'react';
import Modal from 'react-modal';
import "../styles/product.css"
import Qiita from "./Qiita"
import Lock from "./Lock"
import Tue from "./Tue"
import Uroom from "./Uroom"

Modal.setAppElement('#root')


const customStyles = window.innerWidth > 420 ? {
  content : {
    top: "17%",
    left: "23.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: "9999"
  }
} : {
  content : {
    position: "none",
    top: "20px",
    left: "0",
    right: "auto",
    bottom: "auto",
    margin: "0 auto",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: "9999"
  }
};
const ProductModal = (props) => (
  <div data-delighter >
    <Modal
      closeTimeoutMS={300}
      isOpen={props.isOpen}
      onRequestClose={() => props.toggleModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
    {
      props.productId == 1 ?
      <Uroom onClose={() => props.toggleModal()}/> : 
      props.productId == 2 ?
      <Tue onClose={() => props.toggleModal()}/> :
      props.productId == 3 ?
      <Lock onClose={() => props.toggleModal()}/> : 
      props.productId == 4 ?
      <Qiita onClose={() => props.toggleModal()}/> : null
    }
    </Modal>
  </div>
);


export default ProductModal