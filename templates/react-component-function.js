import React, { useState } from 'react'
import PropTypes from 'prop-types' // 引入prop-types库 cnpm i prop-types --save
export default function ${Profile}(props) {
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
      <input ref={inputRef} value={msg} type="text" />
      <button onClick={() => setMsg(Date.now())}>获取最新时间</button>
    </>
  )
}
${Profile}.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string
}
// 指定默认标签属性值
${Profile}.defaultProps = {
  sex: '默认性别'
}
