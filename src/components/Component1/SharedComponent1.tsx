import * as React from 'react'

export type SharedComponent1Props = {
  name: string
}

export const SharedComponent1 = ({ name }: SharedComponent1Props) => {
  return <p>Hi {name} 👋, greetings from shared component</p>
}
