import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, {
      cache: "no-store", // Evita la caché del navegador
    });

    if (!res.ok) {
      throw new Error(`Error al cargar categorías. Código de estado: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al cargar categorías:", error);
    throw error;
  }
};
export default getCategories;