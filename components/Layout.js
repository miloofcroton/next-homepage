import styled from 'styled-components';
import Header from './Header';

const LayoutDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const Layout = (props) => (
  <LayoutDiv>
    <Header />
    {props.children}
  </LayoutDiv>
)

export default Layout;
