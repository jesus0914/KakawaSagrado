import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-prodcut";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChoseCategory from "@/components/chose-category";
import FeacturedProducts from "@/components/feactured-products";
export default function Home() {
  return (
   <main>
    <CarouselTextBanner/>
    <FeacturedProducts/>
    <BannerDiscount/>
    <ChoseCategory/>
    <BannerProduct/>
   </main>
  );
}
