import { Article } from "../../redux/articles";
import {
  BannerContainer,
  Card,
  CardBody,
  CardImage,
  CardPrice,
  CardTitle,
} from "./ProductCard.styled";

type Props = {
  article: Article;
};

const ProductCard = ({ article }: Props) => {
  return (
    <Card to="/article/1">
      <BannerContainer>
        <CardImage src={article.image} alt="product preview" />
      </BannerContainer>
      <CardBody>
        <CardTitle>{article.title}</CardTitle>
        <CardPrice>${article.price}</CardPrice>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
