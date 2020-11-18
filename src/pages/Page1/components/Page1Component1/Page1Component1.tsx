import * as React from 'react'
import styled from 'styled-components'
import * as RBS from 'react-bootstrap'

export type Page1Component1Props = {
  cname: string
}

const StyledButton = styled(RBS.Button)`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export function Page1Component1({ cname }: Page1Component1Props) {
  const [show, setShow] = React.useState(false)

  return (
    <RBS.Row>
      <RBS.Col xs={6}>
        <RBS.Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <RBS.Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </RBS.Toast.Header>
          <RBS.Toast.Body>Woohoo, you're reading this text in a RBS.Toast {cname}!</RBS.Toast.Body>
        </RBS.Toast>
      </RBS.Col>
      <RBS.Col xs={6}>
        <StyledButton onClick={() => setShow(true)}>Show Toast</StyledButton>
      </RBS.Col>
    </RBS.Row>
  )
}
