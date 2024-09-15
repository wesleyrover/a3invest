// styles.js
import styled from 'styled-components';

export const DrawerDiv = styled.div`
  height: 100vh;
  width: 250px;
  background-color: ${({ theme }) => theme.drawerBackground};
  display: flex;
  flex-direction: column;
`;

export const HeaderDiv = styled.div`
  height: 56px;
  width: 250px;
  background-color: ${({ theme }) => theme.headerBackground};
  cursor: pointer;
`;

export const Line = styled.div`
  height: 1px;
  width: 250px;
  background-color: rgba(221, 221, 221, 0.08);
  margin-top: 16px;
  margin-bottom: 16px;
`;
