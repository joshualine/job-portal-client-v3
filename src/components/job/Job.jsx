import { Card, Button } from 'react-bootstrap';

const Job = () => {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Software Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><span>Posted </span>2 hours ago</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content ck example text to build on the card title and make up the
          bulk of the cards content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis veritatis error ducimus illum dolore nihil repellat molestiae aliquid ipsum maxime.
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  )
}

export default Job