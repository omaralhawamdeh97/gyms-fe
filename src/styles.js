import styled from "styled-components";

export const NavDiv = styled.nav`
  background-color: white;
  border-style: solid;
  height: 50px;
  width: 100px;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 70%;
`;
export const ListWrapper = styled.div`
  justify-content: flex-start;

  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
export const ProductWrapper = styled.div`
  color: ${(props) => props.theme.mainColor};
  border-style: ${(props) => (props.selected ? "solid" : "none")};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  border-color: green;
  width: 50%;
  margin: 10px;
  fill-opacity: initial;
  box-shadow: 4px 4px 4px 4px lightgrey;
`;

export const HomeDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 75%;
`;
export const IngredientHome = styled.div``;
export const CategoryDiv = styled.div`
  height: 200px;
  width: 350px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #f8eded;
  border-radius: 5px;
  margin-top: 100px;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  height: 55px;
`;

export const GymCardDiv = styled.div`
  color: ${(props) => props.theme.mainColor};
  border-style: ${(props) => (props.selected ? "solid" : "none")};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  color: black;
  border-color: green;
  width: 20%;
  margin: 20px;
  margin-top: 47px;
  fill-opacity: initial;
  box-shadow: 4px 4px lightgrey;
  height: 200px;

  p {
    font-size: 25px;
  }
`;
