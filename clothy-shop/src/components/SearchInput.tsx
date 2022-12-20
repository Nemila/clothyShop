import styled from "styled-components";

type Props = {};

const Search = styled.input`
  width: 100%;
  padding: 16px 24px;
  font-size: 18px;

  border: 1px solid black;

  border-left: none;
  border-right: none;

  outline: none;
`;

const SearchInput = (props: Props) => {
  return (
    <Search type="text" placeholder="Search Something..." id="searchInput" />
  );
};

export default SearchInput;
