import { Minus, Plus, ShoppingCart } from "phosphor-react"
import api from '../../services/api'
import imgCoffee from '../../assets/img/Coffee.png'
import { useEffect, useState } from "react"
import { CoffeeContainerDiv } from "./styles"

export function CoffeeContainer() {
  const [coffee] = useState([{
    "id": 1,
    "photo": { imgCoffee },
    "type": "tradicional",
    "title": "Expresso Tradicional",
    "body": "O tradicional café feito com água quente e grãos moídos"
  },
  {
    "id": 2,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  },
  {
    "id": 3,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  },
  {
    "id": 4,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  },
  {
    "id": 5,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  },
  {
    "id": 6,
    "type": "tradicional",
    "title": "Expresso Americano",
    "body": "Expresso diluído, menos intenso que o tradicional"
  }
  ]);
  console.log(coffee)

  const firtFour = coffee.slice(0, 4);
  const remaining = coffee.slice(4);
  for (let index = 0; index < coffee.length; index++) {
    const element = coffee[index];
    console.log(element)
  }

  const content = firtFour.map((list) =>
  (
    <>
      <div className="ListCard">
        <div className="Card">
          <img src={imgCoffee} alt="" />
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

  const secondContent = remaining.map((list) =>
  (
    <>
      <div className="ListCard">
        <div className="Card">
          <img src={imgCoffee} alt="" />
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
            {secondContent}
          </main>
        </div>
      </div >
    </CoffeeContainerDiv >
  )
}
