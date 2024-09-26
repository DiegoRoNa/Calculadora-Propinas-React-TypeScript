import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // <OrderItem[]> => es un GENERIC
    const [tip, setTip] = useState(0) // propina
    
    const addItem = (item: MenuItem) => {

        // validar items duplicados
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            // buscar cual es el item repetido, y sumarle uno, manteniendo los demas objetos igual
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder) // seteamos el nuevo state
        } else {
            const newItem = {...item, quantity: 1} // ya tiene su type, gracias al GENERIC
            setOrder([...order, newItem]) // seteamos el nuevo state
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder( order.filter( item => item.id !== id) )
    }

    const placeOrders = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrders
    }
}