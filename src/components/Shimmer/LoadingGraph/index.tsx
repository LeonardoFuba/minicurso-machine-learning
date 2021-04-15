import React from 'react'

import Skeleton from '../../Skeleton'

import { Container } from './styles'

const LoadingGraph: React.FC = () => {
  return (
    <Container>
      <div id="loading-product" className="panel-no-shadow">
        <Skeleton className="row-skeleton" />
        <Skeleton className="img-skeleton" />
      </div>
    </Container>
  )
}

export default LoadingGraph
