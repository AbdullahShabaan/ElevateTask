import { useQuery } from "@tanstack/react-query";

const getAllCategories = async () => {
  const req = await fetch("https://fakestoreapi.com/products/categories");
  return req.json();
};
const useGetAllCategories = () => {
  const getCategories = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllCategories,
  });
  return getCategories;
};

export default useGetAllCategories;
