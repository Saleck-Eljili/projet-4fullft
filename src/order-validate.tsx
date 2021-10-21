import React from 'react'
import { ContainerWrapper } from './container.styled'

interface Props {
  
}

const OrderValidate = (props: Props) => {
  return (
    <ContainerWrapper>
      <h1>C'est parti !</h1>
      
      <p>Notre maitre kebabier prépare votre commande</p>
      <p>Patience...</p>

      <img src={`${process.env.PUBLIC_URL}/images/loading.png`} alt="Loading" />
    </ContainerWrapper>
  )
}

export default OrderValidate
