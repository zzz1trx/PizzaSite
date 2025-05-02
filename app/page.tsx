import { Categories, Container, Title, SortPopup, ProductsGroupList } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
      <>
      <Container className="mt-10">
        <Title className="font-extrabold" text-size="lg" text={"Все пиццы"}/>
      </Container>

        <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
              title="Пиццы" 
              items={[
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://irecommend.ru/sites/default/files/product-images/278223/XRIa4KxVJxkTmHSqcYXbg.jpg',
                price: 550,
                items: [{ price: 550 }],
              },
              
              ]} categoryId={1} />
              <ProductsGroupList
              title="Завтрак" 
              items={[
              {
                id: 2,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://irecommend.ru/sites/default/files/product-images/278223/XRIa4KxVJxkTmHSqcYXbg.jpg',
                price: 550,
                items: [{ price: 550 }],
              },
              
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
      </>
  );
}
