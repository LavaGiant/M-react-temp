import { memo } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd'

import logo from '@/assets/img/logo.svg';

import { HelloWrapper } from './style'

const HelloWorld = memo(() => {
  const { count } = useSelector(state => ({
    count: state.getIn(['counter', 'count'])
  }))
  const history = useHistory()
  return (
    <HelloWrapper>
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/pages/hello-world/index.jsx</code> and save to reload.
      </p>
      <p>count: {count}</p>
      <Button type="primary" className="btn" onClick={() => history.push("/counter")}>Counter</Button>
    </HelloWrapper>
  )
})

export default HelloWorld
