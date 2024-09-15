// styles.js
import styled from 'styled-components';

interface IconProps {
  logo: string;
}

export const Container = styled.div`
  height: 40px;
  width: 250px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.div<IconProps>`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 16px;
`;

export const Text = styled.div`
  margin-left: 8px;
  color: #FFFFFF;
  font-size: 13px;
`;