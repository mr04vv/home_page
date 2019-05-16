import React,{Fragment} from 'react'
import SVG from './SVG'
import SVG2 from './SVG2'
import styled from "react-emotion"

const TopScreen = (props) => (
    <Fragment>
        <Name>
            <SVG width={props.nameWidth}/>
        </Name>
        <Title>
            <SVG2 width={props.titleWidth}/>
        </Title>
  </Fragment>
)

const Name = styled("div")`
  opacity: 0.7;
  width: fit-content;
  margin: 30vh auto 0;
  @media (max-width: 420px) {
    margin: 20vh auto 0;
  }
`;

const Title = styled("div")`
  width: fit-content;
  margin: -30px auto;
  @media (max-width: 420px) {
    margin: -60px auto;
  }
`;

export default TopScreen