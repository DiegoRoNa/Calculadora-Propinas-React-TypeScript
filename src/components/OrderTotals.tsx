import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderTotalsPropos = {
  order: OrderItem[]
  tip: number
  placeOrders: () => void
}

export default function OrderTotals({order, tip, placeOrders} : orderTotalsPropos) {

  // calcular el subtotal, total items sin la propina
  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  
  // calcular la propina
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])

  // calcular el total
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className=" space-y-3">
        <h2 className=" font-black text-2xl">Totales y propinas:</h2>
        <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
        <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
        <p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
              disabled={totalAmount === 0}
              onClick={() => placeOrders()}>
      Guardar orden</button>
    </>
  )
}
