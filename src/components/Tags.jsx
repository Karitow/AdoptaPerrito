// Badge es un componente que nos permite mostrar texto en una caja junto a otro texto.
import Badge from 'react-bootstrap/Badge'

const Tags = ({color,tag}) => {
  return (
    <h5><Badge bg={color} style={{width:'220px'}}>{tag}</Badge></h5>
  )
}

export default Tags