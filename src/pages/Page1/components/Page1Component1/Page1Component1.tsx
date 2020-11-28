import styled from 'styled-components'

export type Page1Component1Props = {
  cname: string
}

const StyledButton = styled.div`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export function Page1Component1({ cname }: Page1Component1Props): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </div>
          <div>Woohoo, you are reading this text in a div {cname}!</div>
        </div>
      </div>
      <div>
        <StyledButton onClick={() => console.log('x')}>Show Toast</StyledButton>
      </div>
    </div>
  )
}
