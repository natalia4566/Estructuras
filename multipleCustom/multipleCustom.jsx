import React from 'react';
import useCounter from './useCounter';
import useFetch from './useFetch';

const multipleCustom = () => {
  const { count, increment } = useCounter(1);
  const url = `https://breakingbadapi.com/api/quotes/${count}`;
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div>
      <button onClick={increment}>Increment Counter</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error: {hasError}</div>
      ) : (
        <blockquote>
          {data && data[0] && (
            <>
              <p>{data[0].quote}</p>
              <footer>{data[0].author}</footer>
            </>
          )}
        </blockquote>
      )}
    </div>
  );
};

export default multipleCustom;
