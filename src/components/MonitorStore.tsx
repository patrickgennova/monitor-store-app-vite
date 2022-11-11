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
  price: number
  quantity: number
}

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {
  const [products, setProducts] = useState<MonitorType[]>([]);

  const addItem = (newItem: MonitorType) => {
    setProducts(prev => [...prev, newItem])
  }

  const sellItem = (index: number) => {
    let product = products

    if (Number(product[index].quantity) === 0) return alert('Sem estoque')

    product[index] = { ...product[index], quantity: Number(product[index].quantity) - 1 }

    setProducts(product)
  }
  console.log(products)


  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm addItem={addItem} products={products} />
      <MonitorFilters />
      <MonitorInventory products={products} sellItem={sellItem} />
    </>
  )
}
