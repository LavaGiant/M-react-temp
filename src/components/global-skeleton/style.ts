import styled, { StyledComponent } from 'styled-components'

export const SkeletonWrapper: StyledComponent<'div', any> = styled.div`
  background-color: #fff;
  height: 60vh;
  .loading{
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
  }
`