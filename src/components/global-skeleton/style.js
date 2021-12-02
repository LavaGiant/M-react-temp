import styled from 'styled-components'

export const SkeletonWrapper = styled.div`
  background-color: #fff;
  height: 60vh;
  .loading{
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
  }
`