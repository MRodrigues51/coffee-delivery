import styled from "styled-components";

export const HomeContainer = styled.main`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  width: 100%;
  margin: 5rem auto;

  div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
  .BannerBegin{
    padding: 0 3rem 5rem 3rem;
    gap: 5rem;
  }

  h1 {
    font-weight: 700;
    line-height: 130%;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
  }
  span {
    line-height: 160%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .itemsAlign span{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  /* span .Cart .Package .Timer .Coffee {
    width: 10%;
  } */
  .Cart {
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    padding: 5px;
  }
  .Package {
    background: ${(props) => props.theme["base-text"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    padding: 5px;
  }
  .Timer {
    background: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    padding: 5px;
  }
  .Coffee {
    background: ${(props) => props.theme["purple"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    padding: 5px;
  }
  .CoffeeContainerStyle {
    background: ${(props) => props.theme.background};
  }

`
