import { useState } from 'react'
import { BRAND_NAMES, SCREEN_SIZES, MonitorType } from './MonitorStore'

type NewMonitorFormProps = {
  addItem: Function,
  products: MonitorType[]
}

export const NewMonitorForm: React.FC<NewMonitorFormProps> = ({ addItem, products }) => {

  const [productNumber, setProductNumber] = useState("")
  const [brand, setBrand] = useState("")
  const [screenSize, setScreenSize] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  const mountItem = () => {

    if (!productNumber || !brand || !screenSize || !price || !quantity) {
      return alert('Preencha todos os campos')
    }

    let productNumberExist: boolean | undefined;

    products.filter(e => {
      if (e.productNumber === productNumber) return productNumberExist = true
    })

    if (productNumberExist) return alert("Já existe um produto com esse número.")

    let newProduct = {
      productNumber,
      brand,
      screenSize,
      price,
      quantity
    }
    addItem(newProduct)

    setProductNumber('')
    setBrand('')
    setScreenSize('')
    setPrice('')
    setQuantity('')

  }

  return (
    <fieldset>
      <legend>Add to inventory</legend>

      <label htmlFor='productNumber'>Product Number: </label>
      <input
        type='text'
        name='productNumber'
        value={productNumber}
        onChange={e => setProductNumber(e.target.value)}
      />
      <br />

      <label htmlFor='brand'>Brand: </label>
      <select name='brand' value={brand} onChange={e => setBrand(e.target.value)}>
        <option value="" disabled>-- Select --</option>
        {BRAND_NAMES.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <br />

      <label htmlFor='screenSize'>Screen Size: </label>
      <select name='screenSize' value={screenSize} onChange={e => setScreenSize(e.target.value)}>
        <option value="" disabled>-- Select --</option>
        {SCREEN_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <br />

      <label htmlFor='price'>Price: </label>
      <input type='number' name='price'
        value={price}
        onChange={e => setPrice(e.target.value)} />
      <br />

      <label htmlFor='quantity'>Quantity: </label>
      <input type='number' name='quantity'
        value={quantity}
        onChange={e => setQuantity(e.target.value)} />
      <br />

      <input type='button' value='Add Monitor' onClick={() => mountItem()} />
    </fieldset>
  )
}
