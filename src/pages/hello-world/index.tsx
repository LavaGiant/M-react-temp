import { memo, FC } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'antd'

import logo from '@/assets/img/logo.svg';

import { HelloWrapper } from './style'

const HelloWorld: FC = memo(() => {
  const history = useHistory()
  return (
    <HelloWrapper>
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/pages/hello-world/index.tsx</code> and save to reload.
      </p>
      <Button type="primary" className="btn" onClick={() => history.push("/404")}>404</Button>
    </HelloWrapper>
  )
})

export default HelloWorld
