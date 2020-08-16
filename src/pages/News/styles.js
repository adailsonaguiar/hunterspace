import styled from 'styled-components';

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, min(100%, 318px));
  grid-gap: 20px;
  justify-content: space-around;
  padding: 15px;
  animation: bounce 2s linear;
`;

export const More = styled.button`
  width: 90%;
  max-width: 50%;
  margin: 20px auto;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`