import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
  {
    id: 'tip-25',
    value: .25,
    label: '25%'
  },
]

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>> // VSC proporciona este type
  tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-3xl">Propina</h3>

      <form>
        {tipOptions.map( tipOption => (
          <div key={tipOption.id} className=" flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input type="radio" 
                  name="tip" 
                  value={tipOption.value} 
                  id={tipOption.id} 
                  onChange={e => setTip(+e.target.value)} // el signo +, es para convertir el string a number
                  checked={tipOption.value === tip} // reiniciar el form, con el boton de guardar 
            />
          </div>
        ))}
      </form>
    </div>
  )
}
