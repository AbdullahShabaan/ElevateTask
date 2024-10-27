import { useQuery } from "@tanstack/react-query";

const getProductsByCategory = async ({ queryKey }) => {
  const categoryName = queryKey[1];

  const response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
  return response.json();
};
const useGetProductsByCat = (args) => {
  const productsByCategory = useQuery({
    queryKey: ["getProductsByCategory", args],
    queryFn: getProductsByCategory,
  });
  return productsByCategory;
};

export default useGetProductsByCat;
