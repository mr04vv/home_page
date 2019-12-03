import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { HashLink } from 'react-router-hash-link';

export const CustomAppBar = styled(AppBar)`
  margin: 20px auto;
  width: 90%;
  border-radius: 30px;
  left: 20px;
  right: 20px;
  box-shadow: none;
  background-color: #eee;
`;

export const Title = styled.p`
  letter-spacing: 2px;
  font-weight: bold;
  color: #5a5a5a;
  font-size: 18px;
  margin-left: 10px;
  flex-grow: 1;
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`;

export const CustomLink = styled(HashLink)`
  color: #5a5a5a;
  letter-spacing: 2px;
  text-decoration: none;
  text-align: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
