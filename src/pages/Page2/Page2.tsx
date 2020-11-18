import * as React from 'react'
import * as SC from '../../components'

export type Page2Props = {
  message: string
}

type Page2State = {
  count: number
}

export default class Page2 extends React.Component<Page2Props, Page2State> {
  state: Page2State = {
    count: 0,
  }

  render() {
    return (
      <>
        <SC.SharedComponent1 name="Page 1" />
        <div>
          This is page 2 - {this.props.message} {this.state.count}
        </div>
      </>
    )
  }
}
