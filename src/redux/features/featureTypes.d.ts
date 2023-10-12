export type TodoType = {
  id: string;
  title: string;
  description: string;
  parent: string;
};

export type SubCategoryType = {
  id: string;
  name: string;
  description?: string;
  todoList?: string[];
  subCategories?: string[];
  parent: string;
};

export type CategoryType = Omit<SubCategoryType, "parent"> & {
  subCategories?: string[];
  todoList?: string[];
};
