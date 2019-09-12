import React from 'react'
import './ContentBox.scss'

export default function(props: any) {
  return <div className="content-box">{props.children}</div>
}
