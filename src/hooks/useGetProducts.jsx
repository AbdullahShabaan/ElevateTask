import { useQuery } from "@tanstack/react-query";

const getProductsFetch = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  return response.json();
};
const useGetProducts = () => {
  const getProducts = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFetch,
  });
  return getProducts;
};

export default useGetProducts;
