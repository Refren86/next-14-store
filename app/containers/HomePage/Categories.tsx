import { TCategory } from "@/app/types/api";
import { SlidesPerViewSwiperWrapper } from "@/app/components/SlidesPerViewSwiper/SlidesPerViewSwiperWrapper";

function Categories() {
  const categories: TCategory[] = [];

  return (
    <SlidesPerViewSwiperWrapper
      slides={categories}
      title="Категорії"
      buttonCenter
    />
  );
}

export default Categories;
