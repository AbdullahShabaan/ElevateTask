import Skeleton from "react-loading-skeleton";

const MenuSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <Skeleton
      className="mx-2"
      key={index}
      width={100}
      height={20}
      baseColor="#f0f0f0"
      highlightColor="#e0e0e0"
    />
  ));
};

export default MenuSkeleton;
