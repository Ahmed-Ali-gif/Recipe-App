  export const gettingData = async () => {
    try {
      const url = "https://dummyjson.com/recipes";
      const res = await fetch(url);
      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  gettingData();