import * as React from 'react'
import * as C from './components'
import * as SC from '../../components'

export type Page1Props = {
  message: string
}

type Page1State = {
  count: number
}

export default class Page1 extends React.Component<Page1Props, Page1State> {
  state: Page1State = {
    count: 0,
  }

  render() {
    return (
      <>
        <SC.SharedComponent1 name="Page 1" />
        <C.Page1Component1 cname="Page 1" />
        <div>
          This is page 1 - {this.props.message} {this.state.count}
        </div>
      </>
    )
  }
}
