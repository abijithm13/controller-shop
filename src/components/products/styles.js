import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px 0px 40px 40px;
  grid-row-gap: 20px;
  color: white;
  -webkit-text-stroke-width: 1px;
  background: linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(0, 0, 0) 100%);

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
  }
`;
