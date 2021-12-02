import { memo } from 'react'
import { Skeleton, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { SkeletonWrapper } from './style'
const GlobalSkeleton = memo(() => {
  const icon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  return (
    <SkeletonWrapper className="wrap-v2">
      <Skeleton active paragraph={{ width: [900, 500, 400] }} />
      <div className="loading">
        <Spin tip="加载中..." indicator={icon} />
      </div>
    </SkeletonWrapper>
  )
})

export default GlobalSkeleton
