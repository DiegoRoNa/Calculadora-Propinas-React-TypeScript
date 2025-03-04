import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem // el type es el de MenyItem, ya que es un componente por obj de la BD
    addItem: (iitem: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className=" font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
