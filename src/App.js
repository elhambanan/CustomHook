
import './App.css';
import useFetch from './useFetch';

function App() {
  const {loading, error, data} = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div className="App">
      {loading && <p>loading ... </p>}
      {error && <p>{error}</p>}
      {data && (
      <div>
        {data.map((data) => (
          <li>{data.name}</li>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
