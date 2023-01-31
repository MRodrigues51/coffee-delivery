import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  margin: 5rem auto;

  .containerBox {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  /* .containerBox form { */
    /* gap: 100px; */
    /* background: black; */
    /* gap: 6px !important; */
  /* } */
  main {
    /* background: orange; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;

  }
  article {
    /* background: teal; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
  }
  input {
    background: ${(props) => props.theme["base-input"]};
    border: 0;
    border-radius: 8px;
    height: 40px;
    padding: 4px;

  }
  form {
    /* /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-start; */
    gap: 6px;
    margin: 20px;
  }
  form div {
    margin-top: 6px;
    /* background: brown; */
    display: flex;
    gap: 10px;
  }
  .divFormRowOne input {
    width: 40%;
  }
  .divFormRowTwo input {
    width: 100%;
  }

  .divFormRowThree .inputNumber {
    width: 40%;
  }
  .divFormRowThree .inputComplement {
    width: 60%;
  }
  .divFormRowFour .inputNeighborhood {
    width: 40%;
  }
  .divFormRowFour .inputCity {
    width: 40%;
  }
  .divFormRowFour .inputUF {
    width: 20%;
  }
  .divHeader {
    margin: 20px;
  }
  .divHeader h3 {
    display: flex;
    gap: 6px;
  }
  .divHeader p{
    display: flex;
    margin-left: 1.625rem;
    margin-top: 0.375rem;
  }
  /* .divFormRowFour {
    background: brown;
    gap: 20px;
  } */
  .PayDiv {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    margin: 20px;
    /* gap: 10px; */
  }
  .PayDiv h3 {
    display: flex;
    gap: 6px;
  }
  .PayDiv p {
    margin-left: 1.625rem;
    margin-top: 0.375rem;
  }
  .PayDivButton {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
    gap: 1rem;

  }
  .PayDivButton button {
    border: 0;
    border-radius: 8px;
    padding: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-button"]};
    display: flex;
    gap: 10px;
  }
   i {
    color: ${(props) => props.theme.purple};
  }
  .divHeader i {
    color: ${(props) => props.theme["yellow-dark"]};
  }


  button {
  padding:0;
  border: 0px;
  padding-left:0;
  padding-right:0;
  outline:none;
  cursor: pointer;
  margin-bottom: 7%;
  }
  button.a{
    margin: 0;
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    color: ${(props) => props.theme['purple']};
  }
  button.b{
    margin: 0;
    padding-right: 5px;
    display: flex;
    width: 1.25rem;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    color: ${(props) => props.theme['purple']};
  }
  .AddRemoveItensCart {
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    width: auto;
    padding: 2.5%;
  }

`
