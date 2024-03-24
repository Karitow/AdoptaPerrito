// importar bootstrap, previamente subir dependencias
import Card from 'react-bootstrap/Card'
import Tags from './Tags'
// formato de destructuring
const MyCard = ({imagen,nombre,descripcion,color, tag}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <Tags color={color} tag={tag}/>
    </Card>
    </>
  )
}

export default MyCard