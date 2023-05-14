import React, { useState, useEffect } from 'react'

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
  const [isShow, setIsShow] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hex}`

  useEffect(() => {
    const timeout = setTimeout(() => { setIsShow(false) }, 2000)
    return () => clearTimeout(timeout)
  })

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={() => { setIsShow(true); navigator.clipboard.writeText(hexValue) }}>
      <p className='percent-value'> {weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {isShow && <p className='alert'>已经复制到剪切板</p>}
    </article>
  )
}

export default SingleColor