import React from 'react'

const List = (props) => {

  return (
    <ul className='list-group list-group-flush'>
        {
            props.items.map(item => <li className='list-group-item' key={Math.random()}>{item}</li>)
        }
    </ul>
  )
}

export default List;
