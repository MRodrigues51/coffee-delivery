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
    align-items: center;
    justify-content: space-between;
  }
  .Card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 25%;
    transition: all 0.3s ease-out;

  }


  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    outline:none;
    border-right: 0px;
    border-top: 1px solid black;
    border-left: 0px;
    border-bottom: 1px solid black;
    border-right: 0px solid black;
    height: 30px;
    width: 50px;
    padding:1%;
    background-color: ${(props) => props.theme['base-button']}
  }
  label, input, button {
    font-size: inherit;
    padding: 0.2em;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}
button{
height:30px;
padding:1%;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding-left:2%;
padding-right:2%;
outline:none;
cursor: pointer;

}
button.a{
  border-right: 0px solid black;
}
button.b{
    border-right: 1px solid black;
}
`
