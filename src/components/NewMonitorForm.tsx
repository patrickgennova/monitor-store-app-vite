import { useEffect, useState } from 'react'
import { BRAND_NAMES, SCREEN_SIZES, MonitorType } from './MonitorStore'

type NewMonitorFormProps = {
  addItem: Function
}

export const NewMonitorForm: React.FC<NewMonitorFormProps> = ({ addItem }) => {

  const [newItem, setNewItem] = useState<MonitorType>({
    productNumber: "",
    brand: "",
    screenSize: "",
    price: "",
    quantity: ""
  })
  const [isFilled, setIsFilled] = useState(true)

  useEffect(() => {
    if (newItem && newItem.productNumber && newItem.brand && newItem.screenSize && newItem.price && newItem.quantity) {
      setIsFilled(false)
    }
  }, [newItem])

  const handleItem = (prop: string, value: string) => {
    setNewItem({ ...newItem, [prop]: value })
  }

  const submitNewItem = () => {
    addItem(newItem)
      .then(() =>
        setNewItem({
          productNumber: "",
          brand: "",
          screenSize: "",
          price: "",
          quantity: ""
        }))
      .catch((err: string) => alert(err))
  }

  return (
    <fieldset>
      <legend>Add to inventory</legend>

      <label htmlFor='productNumber'>Product Number: </label>
      <input
        type='text'
        name='productNumber'
        value={newItem.productNumber}
        onChange={e => handleItem("productNumber", e.target.value)}
      />
      <br />

      <label htmlFor='brand'>Brand: </label>
      <select name='brand' value={newItem.brand} onChange={e => handleItem("brand", e.target.value)}>
        <option value="" disabled>-- Select --</option>
        {BRAND_NAMES.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <br />

      <label htmlFor='screenSize'>Screen Size: </label>
      <select name='screenSize' value={newItem.screenSize} onChange={e => handleItem('screenSize', e.target.value)}>
        <option value="" disabled>-- Select --</option>
        {SCREEN_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <br />

      <label htmlFor='price'>Price: </label>
      <input type='number' name='price'
        value={newItem.price}
        onChange={e => handleItem('price', e.target.value)} />
      <br />

      <label htmlFor='quantity'>Quantity: </label>
      <input type='number' name='quantity'
        value={newItem.quantity}
        onChange={e => handleItem('quantity', e.target.value)} />
      <br />

      <input type='button' value='Add Monitor' disabled={isFilled} onClick={() => submitNewItem()} />
    </fieldset>
  )
}
