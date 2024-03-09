import { selector } from "recoil";
import { filterAtom } from "../atoms/filterAtom";
import { todoAtom } from "../atoms/todoAtom";

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const filter = get(filterAtom);
    const todos = get(todoAtom);
    if (filter == '') return todos;
    console.log(filter);
    return todos.filter(x => x.description.includes(filter));
  },

});