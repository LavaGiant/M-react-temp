import { memo, MemoExoticComponent } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Map } from 'immutable'
import { Button } from 'antd'
import { changeTipTextAction } from './store/actionCreators'

const HelloWorld: MemoExoticComponent<() => any> = memo(() => {
  const { tipText }: any = useSelector((state: Map<string, any>) => ({
    tipText: state.getIn(['hello', 'tipText'])
  }), shallowEqual)

  const dispatch = useDispatch()
  return (
    <>
      {tipText}
      <Button type="primary" onClick={() => dispatch(changeTipTextAction('哈哈哈'))}>123</Button>
    </>
  )
})

export default HelloWorld
