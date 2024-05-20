import React from 'react';
import useFetch from '../Hooks/useFetch';

function Fetch ({ url }) {
  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Fetch;
