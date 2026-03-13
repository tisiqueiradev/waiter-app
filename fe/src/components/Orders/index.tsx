import type { Order } from "../../types/Order";
import { OrdersBoards } from "../OrderBoards";
import { Container } from "./style";

const orders: Order[] = [
  {
    "_id": "69b318e1408964a2d038b046",
    "table": "123",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza quatro queijos",
          "imagePath": "1773170436549-quatro-queijos.png ",
          "price": 40,

        },
        "quantity": 2,
        "_id": "69b06f042a00b5c2205a911c"
      },
      {
        "product": {

          "name": "Coca-cola",
          "imagePath": "1773171674469-quatro-queijos.png",
          "price": 7,
        },
        "quantity": 1,
        "_id": "69b073da1a83d306a7f20397"
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
        orders={orders}
      />
      <OrdersBoards
        icon="🧑🏼‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoards
        icon="✅"
        title="Pronto"
        orders={[]}

      />
    </Container>
  )
}
