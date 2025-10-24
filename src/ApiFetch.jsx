import React, { useEffect, useState } from "react";

function ApiFetch() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const url = "https://dummyjson.com/quotes";
        const response = await fetch(url);
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    getQuotes(); // ✅ Call the function
  }, []); // ✅ Empty dependency array → runs once on mount

  return (
    <>
      <h2>Quotes</h2>
      {quotes.length > 0 ? (
        <ul>
          {quotes.map((quote) => (
            <li key={quote.id}>
              <b>
                <blockquote>{quote.quote}</blockquote>
              </b>
              <p>- {quote.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // ✅ Show a fallback while fetching
      )}
    </>
  );
}

export default ApiFetch;
