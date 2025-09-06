import { useEffect, useState } from "react";

export default function useFetch({url}) {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  
//  useEffect(() => {
//     setisLoading(true);
//     async function fetchMovie() {
//     const res = await fetch(url);
//     const json = await res.json();
//     setData(json.Search || []);
//   }
//   setisLoading(false);
//     fetchMovie();
//   }, [url]);

 useEffect(() => {
    async function fetchMovie() {
      // Set loading to true before starting the fetch
      setIsLoading(true); 
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.Search || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        // Set loading to false after the fetch is complete (or has failed)
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [url]);



return {data,isLoading};



}
