import supabase from "../supabase/client";
import { toast } from "react-toastify";

export const fetchItems = async (cantity) => {
  try {
    const response = await supabase.from("items").select();
    const itemsFile = response.data;
    const items = [];
    const itemsLength = itemsFile.length;
    const indices = new Set();
    if (cantity > itemsLength) {
      toast.error(
        "No hay suficientes ítems. Por favor parametrice una cantidad menor de parejas.",
      );
      throw new Error("Not enough items");
    }
    while (items.length < cantity) {
      const randomIndex = Math.floor(Math.random() * itemsLength);
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        items.push(itemsFile[randomIndex]);
      }
    }
    return items;
  } catch (error) {
    console.log(error);
  }
};

export const fetchParameters = async () => {
  try {
    const response = await supabase
      .from("parameters")
      .select()
      .eq("name", "cantParejas");
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};
