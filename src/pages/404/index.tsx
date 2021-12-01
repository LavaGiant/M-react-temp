import { FC, memo } from 'react'

import { NotFoundWrapper } from './style'
const NotFound: FC = memo(() => {
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
      </div>
    </NotFoundWrapper>
  )
})

export default NotFound
