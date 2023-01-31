import { Bank, CodeSimple, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { CartContainer } from "./styles";

export function Cart() {

  const items = [
    { id: 1, name: "john" },
    { id: 2, name: "Paul" },
    { id: 3, name: "Ringo" },
  ]

  function CounterButton() {

    const [count, setCount] = useState(0);

    return (
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
  }

  return (
    <CartContainer>
      <div className="containerBox">
        <main>
          <h2>Complete seu pedido</h2>
          <div className="divHeader">
            <h3>
              <i><MapPinLine size={22} weight="regular" /></i> Endereço de entrega
            </h3>
            <p>
              Informe o endereço onde desejar receber seu pedido
            </p>
          </div>
          <form action="">
            <div className="divFormRowOne">
              <input type="text" placeholder="CEP" />
            </div>
            <div className="divFormRowTwo">
              <input type="text" placeholder="Rua" />
            </div>
            <div className="divFormRowThree">
              <input className="inputNumber" type="text" placeholder="Número" />
              <input className="inputComplement" type="text" placeholder="Complemento" />
            </div>
            <div className="divFormRowFour">
              <input className="inputNeighborhood" type="text" placeholder="Bairro" />
              <input className="inputCity" type="text" placeholder="Cidade" />
              <input className="inputUF" type="text" placeholder="UF" />
            </div>

          </form>
          <div className="PayDiv">
            <h3>
              <i><CurrencyDollar size={22} weight="regular" /></i> Pagamento
            </h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <div className="PayDivButton">
              <button value="valor1"> <i className="CreditCard"><CreditCard size={16} weight={"regular"} /></i> cartão de credito</button>
              <button value="valor1"> <i><Bank size={16} weight={"regular"} /></i> cartão de debito</button>
              <button value="valor1"> <i><Money size={16} weight={"regular"} /></i> dinheiro</button>
            </div>
          </div>
        </main>
        <article>
          <h2>Cafés selecionados</h2>
          <div>
            <img src="" alt="" />

            <span>
              <h2>Expresso Tradicional</h2>
              <label htmlFor="">R$ 9,90</label>
            </span>
            <span className="AddRemoveItensCart">
              <button className="a"><Minus weight="bold" /></button>
              <input type="number" />
              <button className="b"><Plus weight="bold" /></button>
              <button><Trash /> remover</button>
            </span>
          </div>

          <div>
            tentativa contador
            {items.map(item => (
              <div key={item.id}>
                {item.name}
                <CounterButton />
              </div>
            ))}
          </div>
        </article>

      </div>
    </CartContainer>
  )
}
