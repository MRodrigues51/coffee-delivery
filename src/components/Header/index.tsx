import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from "./styles"
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <span><i><MapPin size={28} weight='fill' /></i>Crato, CE</span>

        <NavLink to='/cart' title='Cart'>
          <ShoppingCart size={28} weight='fill' />
        </NavLink>

      </nav>
    </HeaderContainer>
  )
}
