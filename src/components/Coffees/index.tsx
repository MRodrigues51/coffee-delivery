import { CoffeeContainerDiv } from "./styles"

export function CoffeeContainer() {
  return (
    <CoffeeContainerDiv>
      <div>
        <h1>Nossos Cafés</h1>
        <div>
          <main>
            <div className="Card">
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <div>
                <span>R$ 9,90</span>
                <button>+</button><input type="number" /><button>-</button>
                <button>card</button>
              </div>
            </div>
            <div className="Card">
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div className="Card">
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div className="Card">
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
          </main>
        </div>
      </div >
    </CoffeeContainerDiv >
  )
}
