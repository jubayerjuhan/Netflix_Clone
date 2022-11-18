import { movieInfoClient } from "../../client.js";

export const getMovieDetail = async (name) => {
  console.log(name, "movie__name 4");
  try {
    const { data } = await movieInfoClient.get("", {
      params: {
        t: name,
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};
