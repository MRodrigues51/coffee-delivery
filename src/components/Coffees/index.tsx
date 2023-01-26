import { Minus, Plus, ShoppingCart } from "phosphor-react"
import imgCoffeeTrad from '../../assets/img/coffee/CoffeeTrad.png'
import imgCoffeeAmer from '../../assets/img/coffee/CoffeeAmer.png'
import imgCoffeeCream from '../../assets/img/coffee/CoffeeCream.png'
import imgCoffeeIce from '../../assets/img/coffee/CoffeeIce.png'
import imgCoffeeMilk from '../../assets/img/coffee/CoffeeMilk.png'
import imgCoffeeLatte from '../../assets/img/coffee/CoffeeLatte.png'
import imgCoffeeCapuc from '../../assets/img/coffee/CoffeeCapuc.png'
import imgCoffeeMac from '../../assets/img/coffee/CoffeeMac.png'
import imgCoffeeMoc from '../../assets/img/coffee/CoffeeMoc.png'
import imgCoffeeChoc from '../../assets/img/coffee/CoffeeChoc.png'
import imgCoffeeCub from '../../assets/img/coffee/CoffeeCub.png'
import imgCoffeeHav from '../../assets/img/coffee/CoffeeHav.png'
import imgCoffeeArab from '../../assets/img/coffee/CoffeeArab.png'
import imgCoffeeIrl from '../../assets/img/coffee/CoffeeIrl.png'

import { useState } from "react"
import { CoffeeContainerDiv } from "./styles"

export function CoffeeContainer() {
  const [coffee] = useState([{
    "id": 1,
    "photo": imgCoffeeTrad,
    "type": "tradicional",
    "title": "Expresso Tradicional",
    "body": "O tradicional café feito com água quente e grãos moídos"
  },
  {
    "id": 2,
    "photo": imgCoffeeAmer,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  },
  {
    "id": 3,
    "photo": imgCoffeeCream,
    "type": "tradicional",
    "title": "Expresso Cremoso",
    "body": "Café expresso tradicional com espuma cremosa"
  },
  {
    "id": 4,
    "photo": imgCoffeeIce,
    "type": "tradicional",
    "title": "Expresso Gelado",
    "body": "Bebida preparada com café expresso e cubos de gelo"
  },
  {
    "id": 5,
    "photo": imgCoffeeMilk,
    "type": "tradicional",
    "title": "Café com Leite",
    "body": "Meio a meio de expresso tradicional com leite vaporizado"
  },
  {
    "id": 6,
    "photo": imgCoffeeLatte,
    "type": "tradicional",
    "title": "Latte",
    "body": "Uma dose de café expresso com o dobro de leite e uma espuma cremosa"
  },
  {
    "id": 7,
    "photo": imgCoffeeCapuc,
    "type": "tradicional",
    "title": "Capuccino",
    "body": "Bebida com canela feita com doses iguais de café, leite e espuma"
  },
  {
    "id": 8,
    "photo": imgCoffeeMac,
    "type": "tradicional",
    "title": "Macchiato",
    "body": "Café expresso misturado com um pouco de leite quente e espuma"
  },
  {
    "id": 9,
    "photo": imgCoffeeMoc,
    "type": "tradicional",
    "title": "Mocaccino",
    "body": "Café expresso com calda de chocolate, pouco leite e espuma"
  },
  {
    "id": 10,
    "photo": imgCoffeeChoc,
    "type": "especial",
    "title": "Chocolate Quente",
    "body": "Bebida feita com chocolate dissolvido no leite quente e café"
  },
  {
    "id": 11,
    "photo": imgCoffeeCub,
    "type": "especial",
    "title": "Cubano",
    "body": "Drink gelado de café expresso com rum, creme de leite e hortelã"
  },
  {
    "id": 12,
    "photo": imgCoffeeHav,
    "type": "especial",
    "title": "Havaiano",
    "body": "Bebida adocicada preparada com café e leite de coco"
  },
  {
    "id": 13,
    "photo": imgCoffeeArab,
    "type": "especial",
    "title": "Árabe",
    "body": "Bebida preparada com grãos de café árabe e especiarias"
  },
  {
    "id": 14,
    "photo": imgCoffeeIrl,
    "type": "especial",
    "title": "irlândes",
    "body": "Bebida a base de café, uísque irlândes, açúcar e chantilly"
  }
  ]);
  console.log(coffee)

  const content = coffee.map((list) =>
  (
    // console.log(list.photo)
    <>
      <div className="ListCard">
        <div className="Card">

          <img src={list.photo} alt="" />
          <pre>{list.type}</pre>
          <h2>{list.title}</h2>
          <p>{list.body}</p>
          <div className="PriceDiv">
            <span className="PriceLabel">
              <p>R$</p>
              <label>9,90</label>
            </span>
            <span className="BackgroundInput">
              <button className="a"><Minus weight="bold" /></button>
              <input type="number" />
              <button className="b"><Plus weight="bold" /></button>
            </span>
            <button className="CartPrice"><ShoppingCart weight="fill" size={28} /></button>
          </div>
        </div>
      </div>
    </>
  )
  )

  return (
    <CoffeeContainerDiv>
      <div className="CoffeeContainer">
        <h1>Nossos Cafés</h1>
        <div className="contentCoffee">
          <main>
            {content}
          </main>
        </div>
      </div >
    </CoffeeContainerDiv >
  )
}
