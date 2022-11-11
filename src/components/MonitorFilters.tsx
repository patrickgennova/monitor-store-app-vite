type MonitorFilterProps = {}

export const MonitorFilters: React.FC<MonitorFilterProps> = () => {
  return (
    <fieldset>
      <legend>Filters</legend>

      <input type='checkbox' name='brandFilterChecked' />
      <label htmlFor='brandFilterValue'>Brand: </label>
      <select name='brandFilterValue'>
        <option value=''>-- Select -- </option>
      </select>
      <br />

      <input type='checkbox' name='minimumSizeFilterChecked' />
      <label htmlFor='minimumScreenSizeFilterValue'>
        Minimum Screen Size:{' '}
      </label>
      <select name='minimumScreenSizeFilterValue'>
        <option value=''>-- Select -- </option>
      </select>
      <br />

      <input type='checkbox' name='maximumPriceFilterChecked' />
      <label htmlFor='maximumPriceFilterValue'>Maximum Price: </label>
      <input type='number' name='maximumPriceFilterValue' />
      <br />
    </fieldset>
  )
}
