import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllArticles } from "../redux/articles";
import { RootState, useAppDispatch } from "../redux/store";
import ProductsCategory from "../components/Products/ProductsCategory";
import HeroBanner from "../components/HeroBanner";
import SearchInput from "../components/SearchInput";
import styled from "styled-components";
import DealSeparator from "../components/DealSeparator";

const Main = styled.div``;

const Home = () => {
  const { articles } = useSelector((state: RootState) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <Main>
      <HeroBanner />
      <SearchInput />
      <ProductsCategory category="men's clothing" articles={articles} />
      <DealSeparator />
      <ProductsCategory category="women's clothing" articles={articles} />
      <DealSeparator />
      <ProductsCategory category="jewelery" articles={articles} />
    </Main>
  );
};

export default Home;
