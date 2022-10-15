import React from 'react';
import * as S from './styles';
import CardActivity from '../../molecules/CardActivity'

import Loure from '../../../src/assets/Loure.jpeg';
const ProductStats = () => {
  return (
    <S.Container>
          <CardActivity />

          <img src={Loure} alt="Lourenço Sofécia" />
        </S.Container>
  )
}

export default ProductStats;