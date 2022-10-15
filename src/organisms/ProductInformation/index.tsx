import React from 'react';
import ButtonContact from '../../atoms/ButtonContact';

import * as S from './styles';

const ProductInformation = () => {
  return (
    <S.Conatiner>
        <h1>Design driven development of your web product</h1>
        <h6>
            We are a full service digital agency that builds immersive applications 
            user experience.
        </h6>
        
        <ButtonContact />
    </S.Conatiner>
  )
}

export default ProductInformation;