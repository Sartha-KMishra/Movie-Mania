import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzJkOTVkYTlmNjU3ZjY5MWE4ZjI3NDU4YzRmYmU5YiIsIm5iZiI6MTc1MjcyNDgxOS42OTcsInN1YiI6IjY4Nzg3NTUzMmE2NTQ2ZTUyOGJhODQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xirNYn-Te4yGGAHH95-aQtxnUKxjr8nHu3veOgGbpdE",
  },
});

export default instance;
