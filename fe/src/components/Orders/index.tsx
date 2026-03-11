import type { Order } from "../../types/Order";
import { OrdersBoards } from "../OrderBoards";
import { Container } from "./style";

const orders: Order[] = [
  {
    "_id": "69b077b58c04432d9dc59bdf",
    "table": "123",
    "status": "IN_PRODUCTION",
    "products": [
      {
        "product": {
          "name": "Pizza quatro queijos",
          "imagePath": "1773170436549-quatro-queijos.png ",
          "price": 40,

        },
        "quantity": 2,
        "_id": "69b077b58c04432d9dc59be0"
      },
      {
        "product": {

          "name": "Coca-cola",
          "imagePath": "1773171674469-quatro-queijos.png",
          "price": 7,
        },
        "quantity": 1,
        "_id": "69b077b58c04432d9dc59be1"
      }
    ],

  }

]

export function Orders() {
  return (
    <Container>
      <OrdersBoards
        icon="⏱️"
        title="Fila de espera"
        order={[]}
      />
      <OrdersBoards
        icon="🧑🏼‍🍳"
        title="Em preparação"
        order={orders}
      />
      <OrdersBoards
        icon="✅"
        title="Pronto"
        order={[]}

      />
    </Container>
  )
}
