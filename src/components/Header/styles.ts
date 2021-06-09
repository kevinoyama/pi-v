import styled from 'styled-components';

export const HeaderView = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px;
  display: flex;
  margin-bottom: 80px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin: 0 auto;
  }
`;
