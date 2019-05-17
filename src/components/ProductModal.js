import React from 'react';
import Modal from 'react-modal';
import "../styles/product.css"
import Qiita from "./Qiita"
import Lock from "./Lock"
import Tue from "./Tue"
import Uroom from "./Uroom"

Modal.setAppElement('#root')


const customStyles = {
  content : {
    top: "17%",
    left: "26.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "600px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
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