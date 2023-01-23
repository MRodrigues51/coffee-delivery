import { HomeContainer } from "./Styles";
import ImgBanner from '../assets/img/ImgBanner.svg'
import ImgBack from '../assets/img/Background.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <div className="BannerBegin" style={{
        backgroundImage: `url(${ImgBack})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'unset',
        backgroundPosition: 'center'
      }}>

        <main>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          <div className="itemsAlign">
            <span>
              <ShoppingCart className="Cart" size={16} weight="fill" />
              Compra simples e segura
            </span>
            <span><Package className="Package" size={16} weight="fill" />Embalagem mantém o café intacto</span>
          </div>
          <div className="itemsAlign">
            <span><Timer className="Timer" size={16} weight="fill" /> Entrega rápida e rastreada</span>
            <span><Coffee className="Coffee" size={16} weight="fill" /> O café chega frenquinho até você</span>
          </div>
        </main>
        <article>
          <img src={ImgBanner} alt="" />
        </article>
      </div>
    </HomeContainer >
  )
}
