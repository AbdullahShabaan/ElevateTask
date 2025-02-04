import useGetProducts from "../hooks/useGetProducts";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import error from "../assets/Error.json";
import TopMenu from "./TopMenu";
import HeaderTitle from "./HeaderTitle";
import useGetAllCategories from "../hooks/useGetAllCategories";
import useGetProductsByCat from "../hooks/useGetProductsByCat";
import { useState } from "react";

const Products = () => {
  const {
    data: products,
    isLoading: loadingAllProducts,
    isError,
    error: errorMessage,
  } = useGetProducts();
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesIsError,
    error: categoriesErrorMessage,
  } = useGetAllCategories();

  const [currentCategory, setCurrentCategory] = useState("");
  const {
    data: productsByCategory,
    isLoading: loadingProductsByCategory,
    failureCount,
  } = useGetProductsByCat(currentCategory);
  const productsToShow = productsByCategory ? productsByCategory : products;
  const isLoading =
    loadingAllProducts || (loadingProductsByCategory && failureCount < 1);

  return (
    <>
      <HeaderTitle title="All Products" />

      <TopMenu
        categoriesErrorMessage={categoriesErrorMessage ?? ""}
        categoriesIsError={categoriesIsError ?? false}
        categoriesLoading={categoriesLoading ?? true}
        categories={categories ?? []}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory ?? ""}
      />

      <section className="py-10 bg-gray-100">
        {isLoading && (
          <Lottie
            animationData={loading}
            loop={true}
            style={{ width: "300px", margin: "auto" }}
          ></Lottie>
        )}
        {isError && (
          <>
            <Lottie
              animationData={error}
              loop={true}
              style={{ width: "300px", margin: "auto" }}
            ></Lottie>
            <p className="text-center">Server Error: {errorMessage.message}</p>
          </>
        )}
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsToShow?.map((product) => (
            <article
              key={product.id}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            >
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    className="object-fill"
                    src={product.image}
                    alt="Hotel Photo"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div className="absolute bottom-1 left-1 inline-flex items-center rounded-lg bg-white p-1 shadow-md">
                    {Array.from({ length: product.rating.rate }).map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                    <span className="ml-1 text-sm text-slate-400">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 truncate">{product.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {product.category}
                  </p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-blue-500">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(product.price)}
                    </p>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
