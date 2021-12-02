import { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

import { NotFoundWrapper } from './style'
const NotFound = memo(() => {
  const history = useHistory()
  return (
    <NotFoundWrapper>
      <div className="content wrap-v2">
        <div className="number-list">
          <div className="number-item item1">4</div>
          <div className="number-item item2">0</div>
          <div className="number-item item3">4</div>
        </div>
        <div className="text">
          很抱歉，你要查找的网页找不到
        </div>
        <Button type="primary" className="back" onClick={() => history.push("/")}>Back</Button>
      </div>
    </NotFoundWrapper>
  )
})

export default NotFound
