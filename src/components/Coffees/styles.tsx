import styled from 'styled-components'

export const CoffeeContainerDiv = styled.div`
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  main {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;

  }
  .Card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    border-radius: 5px;
    /* box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22); */
    padding: 30px;
    margin: 20px;

    transition: all 0.3s ease-out;
  }
  img {

  }
  input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    outline:none;
    border: 0px;
    border-radius: 8px;
    height: 28px;
    width: 1.25rem;
    padding: 3.5%;
    background-color: ${(props) => props.theme['base-button']}
  }
  label, input, button {
    padding: 0.2em;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
}
  button{
  height:30px;
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
  .PriceDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .PriceDiv span {
    margin: 0;
  }
  .CartPrice {
    margin-top: 7%;
    border-radius: 8px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-dark']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3%;
    margin-left: -1.8rem;
  }
  .BackgroundInput {
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    width: auto;
    padding: 2.5%;
  }
  .PriceLabel p{
    font-size: medium;
    font-family: 'Baloo 2', cursive;
    font-weight: 400;
    padding-top: 0.25rem;
  }
  .PriceLabel label{
    margin-left: -0.8rem;
  }
  pre {
    font-family: 'baloo 2', cursive;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0 10px 0 10px;
    border-radius: 12px;
  }
  .ListCard {
    width: 25%;
  }
`
