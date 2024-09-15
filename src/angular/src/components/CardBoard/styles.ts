// styles.js
import styled from 'styled-components';

interface IconProps {
  logo: string;
}

export const Container = styled.div`
  height: 124px;
  width: 196px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-right: 16px;
  cursor: pointer;
`;

export const Icon = styled.div<IconProps>`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 16px;
  margin-top: 16px;
`;

export const Title = styled.div`
  margin-left: 16px;
  color: #213E7F;
  font-size: 16px;
  margin-top: 8px;
  font-weight: 500;
`;

// export const Title = styled.div`
//   /* margin-left: 116px;
//   color: #213E7F;
//   font-size: 16px;
//   margin-top: 8px;
//   display: flex; */
// `;

export const Text = styled.div`
  margin-left: 16px;
  color: #666666;
  font-size: 13px;
  margin-top: 8px;
  font-weight: 400;
`;