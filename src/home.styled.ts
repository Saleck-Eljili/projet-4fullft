import styled from 'styled-components';

export const PopularKebabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 100px
  

  
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  background: var(--second-bg-color);
  border-radius: 16px 0px 0px 16px;
`;

export const CartItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  align-items: center;
  gap: 1.2rem;
`;