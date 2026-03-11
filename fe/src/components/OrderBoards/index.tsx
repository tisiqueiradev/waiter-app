import type { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardsProps {
  icon: string;
  title: string;
  order: Order[];
}

export function OrdersBoards({ icon, title }: OrdersBoardsProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>
      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 items</span>
        </button>

        <button type="button">
          <strong>Mesa 3</strong>
          <span>2 items</span>
        </button>
      </OrdersContainer>
    </Board>
  )
}
