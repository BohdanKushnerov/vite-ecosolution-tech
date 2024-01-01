import styled from "styled-components";

export const Button = styled.button`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 140px;

    border-radius: 500px;
    background: #97d28b;
    border: none;
    color: #173d33;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    cursor: pointer;

    svg use {
      fill: #173d33;
      stroke: #173d33;
    }

    &:hover {
      color: #97d28b;
      background: #173d33;
      svg use {
        fill: #97d28b;
      }
    }
  }
`;
