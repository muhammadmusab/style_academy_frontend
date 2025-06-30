"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
const CategoryTabs = ({
  category,
  value,
}: {
  category: string;
  value: string;
  currentValue: string;
}) => {
  return (
    <TabsList>
      <TabsTrigger
        className={`text-primary border-primary hover:bg-primary hover:text-white transition-all  border  data-[state=active]:text-white data-[state=active]:bg-primary`}
        value={value}
      >
        {category}
      </TabsTrigger>
    </TabsList>
  );
};

export default CategoryTabs;
