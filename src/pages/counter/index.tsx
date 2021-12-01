import { memo, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Button, InputNumber } from 'antd'

import { handleCountAction, changCountAction } from './store/actionCreators'
import { CounterWrapper } from './style'

const Counter: FC = memo(() => {
  const [inputValue, setInputValue] = useState<number>(1)
  const { count }: { count: number } = useSelector((state: any) => ({
    count: state.getIn(['counter', 'count'])
  }))
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <CounterWrapper>
      <div className="count">
        {count}
      </div>
      <InputNumber min={1} max={100} value={inputValue} onChange={setInputValue} />
      <div className="control">
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(handleCountAction(inputValue, 'add'))}>+</Button>
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(handleCountAction(inputValue, 'sub'))}>-</Button>
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(handleCountAction(inputValue, 'mul'))}>x</Button>
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(handleCountAction(inputValue, 'div'))}>/</Button>
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(handleCountAction(inputValue, 'surp'))}>%</Button>
        <Button type="primary" size="large" shape="circle" onClick={() => dispatch(changCountAction(0))}>C</Button>
      </div>
      <Button type="primary" className="btn" onClick={() => history.push("/")}>Back</Button>
    </CounterWrapper>
  )
})

export default Counter
