import { useEffect, useState } from 'react'
import { MonitorType } from './MonitorStore'

type MonitorInventoryProps = {
  products: MonitorType[],
  sellItem: Function
}

export const MonitorInventory: React.FC<MonitorInventoryProps> = ({ products, sellItem }) => {

  useEffect(() => { }, [products])

  return (
    <>
      <br />

      <table border={1} cellPadding='3' style={{ fontSize: 12 }}>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Brand</th>
            <th>Screen Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Vender</th>
          </tr>
        </thead>
        <tbody>
          {products.length && products.map((p, i) => (
            <tr key={i}>
              <td>{p.productNumber}</td>
              <td>{p.brand}</td>
              <td>{p.screenSize}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td><a style={{ cursor: "pointer" }} onClick={() => sellItem(i)}>Vender</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <input type='button' value={`Sell P1234 Monitor`} />
    </>
  )
}
