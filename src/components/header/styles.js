import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(0, 0, 0) 100%);
  display: flex;
  justify-content: space-between;
  color: white;
  border: 8px solid black;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
  }
`;
export const Dropdown = styled.div`
  font-size: 15px;
  margin-top: 5%;
  margin-left: 30%;
  ul {
    list-style: none;
    color: white;
  }
  ul li:before {
    content: "🎮";
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    font-size: 10px;
  }
`;
