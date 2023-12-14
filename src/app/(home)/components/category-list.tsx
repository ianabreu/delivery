import { ICategory } from "@/@types/category";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Props {
  categories: ICategory[];
}
const CategoryList = ({ categories }: Props) => {
  return (
    <ScrollArea className="max-w-4xl w-full">
      <div className="flex flex-row gap-2 justify-center">
        {categories.map((category, index) => (
          <Button
            key={index}
            className="font-semibold text-base whitespace-nowrap border-0 px-1 mx-2 hover:text-primary transition"
            size={"sm"}
            variant={"ghost"}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default CategoryList;
