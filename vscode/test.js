import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function componentName(props) {
  const { name, sex } = props
  const [msg, setMsg] = useState('hello')
  const onMounted = () => console.log('onMounted')
  const onUndated = () => console.log('onUndated')
  const onUnmounted = () => console.log('onUnmounted')
  let watchs = []
  React.useEffect(() => {
    if (watchs.length === 0) {
      onMounted()
    } else {
      onUndated()
    }
    return onUnmounted
  }, watchs)

  const inputRef = React.useRef() // 与React.createRef()功能相同
  return (
    <>
      <input ref={inputRef} defaultValue={msg} type="text" />
      <button onClick={() => setMsg(inputRef.current.value + Date.now())}>修改msg</button>
    </>
  )
}
componentName.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string
}
// 指定默认标签属性值
componentName.defaultProps = {
  sex: '默认性别'
}
