import React,{Fragment, useRef} from 'react'
import styled from "react-emotion"
import "../styles/profile.css"
import uroom from "../images/uroom.jpg"
import lock from "../images/lock.jpg"
import tue from "../images/tue.jpg"
import qiita from "../images/q.jpg"
import "../styles/product.css"
import ProductModal from "./ProductModal"

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false,
      productId: null
    }
  }

  toggleModalStatus(productId) {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      productId: productId
    })
  }


render() {
  return (
  <Fragment>
    <Title>Product</Title>
    <ProductWrapper className="product">
      <ProductLine>
        <Product className="fir" data-delighter ><ProductImage onClick={() => this.toggleModalStatus(1)} img={uroom}/><ProductName>ゆる〜む</ProductName></Product>
        <Product className="sec" data-delighter ><ProductImage onClick={() => this.toggleModalStatus(2)} img={tue}/><ProductName>魔法の杖</ProductName></Product>
      </ProductLine>
      <ProductLine>
        <Product className="fir" data-delighter ><ProductImage onClick={() => this.toggleModalStatus(3)} img={lock}/><ProductName>Smartlock</ProductName></Product>
        <Product className="sec" data-delighter ><ProductImage onClick={() => this.toggleModalStatus(4)} img={qiita} pos={"left"}/><ProductName>Qiita</ProductName></Product>
      </ProductLine>
    </ProductWrapper>
    <ProductModal isOpen={this.state.isOpenModal} toggleModal={() => this.toggleModalStatus(this.state.productId)} productId={this.state.productId}/>
  </Fragment>
)}
}
const Title = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 30px;
  margin-top: 60px;
  letter-spacing:3px; 
`;

const ProductWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductLine = styled("div")`
  display: block;
`;

const Product = styled("div")`
  margin: 70px;
  display: block;
`;

const ProductImage = styled("div")`
  border-radius: 8px;
  margin: 0 auto;
  width: 385px;
  height: 240px;
  background: url(${props => props.img}) center center no-repeat;
  box-shadow: 0 0 15px gray;
  background-size: cover;
  background-position-x: ${props => props ? props.pos : "none"};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  :hover {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;
    -webkit-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const ProductName = styled("div")`
  margin-top: 20px;
  letter-spacing:1px;
  font-size: 15px;
  font-family : Josefin Sans;
`;

export default Products