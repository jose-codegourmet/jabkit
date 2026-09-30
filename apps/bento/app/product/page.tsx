import type { Metadata } from "next";
import { productSeo } from "./_page/content";
import { ProductPage } from "./_page/ProductPage";

export const metadata: Metadata = {
  title: { absolute: productSeo.title },
  description: productSeo.description,
};

export default function Page() {
  return <ProductPage />;
}
