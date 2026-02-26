import React, { Component } from 'react'
export default class ${componentName} extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'hello world' }
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  inputRef = React.createRef() // 与函数式组件中的useRef()类似

  render() {
    return (
      <>
        <input defaultValue={this.state.text} ref={this.inputRef} />
      </>
    )
  }
}
