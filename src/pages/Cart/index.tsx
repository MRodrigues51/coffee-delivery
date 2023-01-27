import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <div>
        <main>
          <h2>Complete seu pedido</h2>
          <div>
            <div className="divHeader">
              <h3>
                Endereço de entrega
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
          </div>
        </main>
        <article>
          <h2>Cafés selecionados</h2>
        </article>

      </div>
    </CartContainer>
  )
}
