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
    background: orange;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
  }
  article {
    background: teal;
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
  /* .divHeader { */
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start; */
  /* } */
  /* .divFormRowFour {
    background: brown;
    gap: 20px;
  } */

`
