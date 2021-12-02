import { memo, FC } from 'react'

import logo from '@/assets/img/logo.svg';

import './style.css'

const HelloWorld: FC = memo(() => {
  return (
    <div className="wrapper">
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/pages/hello-world/index.tsx</code> and save to reload.
      </p>
    </div>
  )
})

export default HelloWorld
