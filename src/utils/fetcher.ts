export /**
 * Fetches data from the given URL and parses it as JSON.
 *
 * @param url - The URL to fetch data from.
 * @returns A promise that resolves to the parsed JSON data.
 */
const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
    }
    return res.json();
  });
};
