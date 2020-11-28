import * as React from 'react'
import tw, { styled } from 'twin.macro'
import * as Icons from '@styled-icons/material'
import * as C from './components'
import * as SC from '../../components'

export type Page1Props = {
  message: string
}

const Button = styled.button`
  ${tw`
    px-8 py-4 text-xl font-semibold text-blue-700 bg-transparent border border-blue-500
    rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
`

export const Page1 = (props: Page1Props) => {
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
      <Button type="button" onClick={handleClick}>
        <Icons.Bookmark size="48" />
      </Button>
      <img src="https://lorempixel.com/400/200/cats/Random%20text/" alt="A random sports shot" />
    </div>
  )
}

export default Page1
