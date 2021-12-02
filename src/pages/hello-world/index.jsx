import { memo } from 'react'

import logo from '@/assets/img/logo.svg';

import './style.css'

const HelloWorld = memo(() => {
  return (
    <div className="wrapper">
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/pages/hello-world/index.jsx</code> and save to reload.
      </p>
    </div>
  )
})

export default HelloWorld
