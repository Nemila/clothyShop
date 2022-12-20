import { Link } from "react-router-dom";
import { Article } from "../../redux/articles";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const ProductGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
const Wrapper = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0 auto;
`;
const CategoryTitle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: black;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: capitalize;
  text-decoration: none;
`;

type Props = {
  articles: Article[];
  category: string;
};

const ProductsCategory = ({ articles, category }: Props) => {
  const filteredArticles = articles.filter(
    (article) => article.category === category
  );
  return (
    <Container>
      <Wrapper>
        <CategoryTitle to={`/category/${category}`}>
          <span>{category}</span>
          <BiChevronRight />
        </CategoryTitle>
        <ProductGrid>
          {filteredArticles.slice(0, 4).map((article) => (
            <ProductCard key={article.id} article={article} />
          ))}
        </ProductGrid>
      </Wrapper>
    </Container>
  );
};

export default ProductsCategory;
