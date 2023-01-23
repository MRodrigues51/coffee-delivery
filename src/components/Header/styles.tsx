import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['purple-dark']};

    nav {
      display: flex;
      gap: 0.8rem;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${(props) => props.theme['purple-light']};
      border-radius: 8px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0;
      padding-bottom: 0;
      gap: 0.5rem;
    }
    span i{
      color: ${(props) => props.theme['purple']};
    }
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};

      border-radius: 8px;
    }
    img {
      height: 40px;
      width: auto;
    }
`
