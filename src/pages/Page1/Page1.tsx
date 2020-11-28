import * as React from 'react'
import * as C from './components'
import * as SC from '../../components'

export type Page1Props = {
  message: string
}

export const Page1 = (props: Page1Props): JSX.Element => {
  const [count, setCount] = React.useState(0)

  const { message } = props

  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <SC.SharedComponent1 name="Page 1" />
      <C.Page1Component1 cname="Page 1" />
      <p>
        This is page 1 - {message} {count}
      </p>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default Page1
