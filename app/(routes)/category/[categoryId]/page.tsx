import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavbarProducts from "@/components/navbar-products";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  return (
    <div className="bg-white">
      <NavbarProducts />
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className=" lg:item-center lg:grid-cols-6 lg:gap-x-8">
            <div className=" mt-6 lg:col-span-4 lg:mt-2">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryPage;
