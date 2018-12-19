import React from 'react'


function Tablerow(props) {
  return (
    <tr>
    <td>{props.id}</td>
    <td>{props.first_name}</td>
    <td>{props.last_name}</td>
    <td>{props.email}</td>
    <td>{props.ip_address}</td>
  </tr>
  )
}

export default Tablerow