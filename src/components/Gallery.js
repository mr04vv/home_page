import React,{Fragment, useRef} from 'react'
import styled from "react-emotion"
import eff from "../images/e.jpg"
import sin from "../images/s.jpg"
import "../styles/profile.css"
import AlbumModal from "./AlbumModal"


class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false,
      albumId: null
    }
  }

  toggleModalStatus(albumId) {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      albumId: albumId
    })
  }


render() {
  return (
  <Fragment>
    <Title>Gallery</Title>
    <AlbumWrapper>
      <Album onClick={() => this.toggleModalStatus(1)} className="left-album" data-delighter >
        <AlbumName>Europe
          <Image src={eff}/>
        </AlbumName>
        france & italy
      </Album>
      <Album onClick={() => this.toggleModalStatus(2)} className="right-album" data-delighter>
        <AlbumName>Disney
        <Image src={sin}/>          
        </AlbumName>
        disney land & sea
      </Album>
    </AlbumWrapper>
    <Message className="message" data-delighter>Thank you for your visit !</Message>
    <AlbumModal isOpen={this.state.isOpenModal} toggleModal={() => this.toggleModalStatus(this.state.albumId)} albumId={this.state.albumId}/>
  </Fragment>
  )
  }
}


export default Gallery

const Title = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 30px;
  margin-top: 60px;
  letter-spacing:3px; 
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const AlbumWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  @media (max-width: 420px) {
    margin-top: 40px;
  }
`;

const Album = styled("div")`
  width: 340px;
  height: 400px;
  border-radius: 3px;
  background-color: #d5d1d7;
  transition: all .5s !important;
  box-shadow: 0 0 8px gray;
  font-family : 'Josefin Sans', sans-serif;
  font-size: 18px;
  margin-top: 60px;
  letter-spacing:3px; 
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    letter-spacing:1px; 
    margin: 5px;
    height: 200px;
    font-size: 12px;
  }
`;

const Image = styled("div")`
  margin: 40px auto;
  width: 17vw;
  height: 16vh;
  background: url(${props => props.src}) center center no-repeat;
  background-size: contain;
  @media (max-width: 420px) {
    margin: 10px auto;
    font-size: 17px;
    width: 70%;
  }
`;

const AlbumName = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
  letter-spacing:3px; 
  text-align: center;
  @media (max-width: 420px) {
    margin-top: 25px;
    font-size: 17px;
  }
`;

const Message = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5%;
  letter-spacing:3px;      
  @media (max-width: 420px) {
    font-size: 17px;
    letter-spacing:1px;      
  }   
`;