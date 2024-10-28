import supabase from "../supabase/client";
import { toast } from "react-toastify";

export const fetchItems = async (cantity) => {
  try {
    const topic = await fetchParameters("tema");
    const response = topic.value
      ? await supabase.from("items").select().eq("topic", topic.value)
      : await supabase.from("items").select();
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
    console.error(error);
  }
};

export const fetchParameters = async (parameter) => {
  try {
    const response = await supabase
      .from("parameters")
      .select()
      .eq("name", parameter);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};
