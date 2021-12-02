import { memo, FC } from 'react'

import logo from '@/assets/img/logo.svg';

import { HelloWrapper } from './style'

const HelloWorld: FC = memo(() => {
  return (
    <HelloWrapper>
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/pages/hello-world/index.tsx</code> and save to reload.
      </p>
    </HelloWrapper>
  )
})

export default HelloWorld
