import styled from "styled-components";

export const CounterWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .count{
    font-size: 100px;
  }
  .control{
    width: 200px;
    display: flex;
    justify-content: space-between;
    .ant-btn{
      height: 40px;
      width: 40px;
      line-height: 25px;
      font-size: 30px;
    }
  }
`