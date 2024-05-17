import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../Redux/action";
import Productcard from "../components/Productcard";
import { Checkbox, Grid } from "@chakra-ui/react";
// import { store } from "../Redux/Store";
const Products = () => {
  const data = useSelector((state) => state.P_reducer);
  const products = useSelector((state) => state.P_reducer.products.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    <div>
      <div>
        <h2>sort by price</h2>
        <div>
          <Checkbox iconColor="blue.400" iconSize="1rem">
            High-Low
          </Checkbox>
          <Checkbox iconColor="blue.400" iconSize="1rem">
            Low-High
          </Checkbox>
          <input type="" /> <label htmlFor="">High-Low</label>
        </div>
      </div>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products
          ? products.map((el, ind) => <Productcard {...el} key={ind} />)
          : "....loading"}
      </Grid>
    </div>
  );
};

export default Products;
