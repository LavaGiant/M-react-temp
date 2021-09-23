import styled, { StyledComponent } from 'styled-components'

export const NotFoundWrapper: StyledComponent<'div', any> = styled.div`
  .content{
    height: 470px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .number-list {
      display: flex;
      font-size: 90px;
      font-weight: bold;
      .number-item{
        padding: 0 30px;
        animation-name: item;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
      }
      .item1 {
        animation-duration: 2s;
      }
      .item2 {
        animation-duration: 2.5s;
      }
      .item3 {
        animation-duration: 3s;
      }
      @keyframes item {
      to {
        transform: translateY(-100px);
      }
    }
    }
    .text{
      font-size: 18px;
      color: #666;
    }
  }
`