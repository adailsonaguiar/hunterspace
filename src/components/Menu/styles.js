import styled from "styled-components";

export const HeaderTag = styled.nav`
  background-color: #141414;
  border-bottom: 1px solid #303030;
  z-index: 100;
  /* position: fixed; */
`;

export const NavItems = styled.ul`
  transform: ${(props) =>
    props.isOpen ? "translateX(opx)" : "translateX(-100vw)"};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  transition: all 0.5s ease 0s;
  background: pink;
  z-index: 100;
  position: fixed;
  top: 50px;
`;

export const ItemMenu = styled.li`
  font-size: 3rem;
  font-weight: bold;
  background: blue;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const ButtonNav = styled.button`
  display: flex;
  outline: none;
  background: red;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: none;
`;
