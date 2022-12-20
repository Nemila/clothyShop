import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  display: inline-block;
  color: black;
  text-decoration: none;
  border: 1px solid black;
`;

export const BannerContainer = styled.div`
  width: 300px;
  height: 300px;

  margin: auto;
  padding: 1rem;

  overflow: hidden;
`;

export const CardImage = styled.img`
  object-position: center;
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: 200ms ease all;
  &:hover {
    transform: scale(1.1) rotateZ(5deg);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid black;
  padding: 1rem;
`;

export const CardTitle = styled.h4`
  font-weight: 300;
  font-size: 1.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardPrice = styled.p`
  font-size: 1.2rem;
`;
