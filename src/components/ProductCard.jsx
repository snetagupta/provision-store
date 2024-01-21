import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  const { image = "", title = "", saleType = "" } = props;

  return (
    <Card className="p-2">
      <Card.Img
        variant="top"
        src={image}
        className="text-center mx-auto"
        style={{ maxWidth: "15rem" }}
      />
      <Card.Body>
        <Card.Title className="h6">{title}</Card.Title>
        <Card.Text>{saleType}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
