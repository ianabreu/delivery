import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const CategoryList = () => {
  const categories = [
    "Pizzas",
    "Pizzas Especiais",
    "Bebidas",
    "Aperitivos",
    "Bebidas Alcoolicas",
  ];
  return (
    <ScrollArea className="max-w-4xl w-full shadow-md">
      <div className="flex flex-row gap-3 p-2 justify-center ">
        {categories.map((item, index) => (
          <p key={index} className="font-semibold text-base whitespace-nowrap">
            {item}
          </p>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default CategoryList;
