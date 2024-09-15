// styles.js
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
 margin-top: 64px;
 margin-left: 179px;
 margin-right: 179px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const ConteinerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;