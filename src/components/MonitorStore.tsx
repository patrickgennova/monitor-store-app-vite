import { useEffect, useState } from 'react'
import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'

type MonitorStoreProps = {
  storeName: string
}

export const BRAND_NAMES = ['Dell', 'HP', 'IBM', 'Lenovo'] as const
export const SCREEN_SIZES = [17, 19, 21, 23, 25] as const

type BrandNameType = typeof BRAND_NAMES[number]
type ScreenSizeType = typeof SCREEN_SIZES[number]

export type MonitorType = {
  productNumber: string
  brand: BrandNameType
  screenSize: ScreenSizeType
  price: string
  quantity: string
}

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {
  const [products, setProducts] = useState<MonitorType[]>([]);

  const addItem = async (newItem: MonitorType) => {
    return new Promise((resolve, reject) => {

      let productNumberExist: boolean | undefined;

      products.filter(e => {
        if (e.productNumber === newItem.productNumber) return productNumberExist = true
      })

      if (productNumberExist) return reject("Já existe um produto com esse número.")

      setProducts(prev => [...prev, newItem])

      resolve("OK")
    })
  }

  const sellItem = (index: number) => {
    if (Number(products[index].quantity) <= 0) return alert('Sem estoque')

    let changeQuantityOfProduct = products[index];
    changeQuantityOfProduct.quantity = String(Number(changeQuantityOfProduct.quantity) - 1)

    setProducts(prev => {
      prev[index] = changeQuantityOfProduct
      return [...prev]
    })
  }


  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm addItem={addItem} />
      <MonitorFilters />
      <MonitorInventory products={products} sellItem={sellItem} />
    </>
  )
}
