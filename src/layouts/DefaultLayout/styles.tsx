import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100rem;
  height: auto;
  margin: 0 auto;
  padding: 2rem;

  background: ${(props) => props.theme['background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
