
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const debug = import.meta.env.VITE_DEBUG === 'true';

function App() {
  console.log(apiUrl);
  console.log(debug);
  return (
    <>
      <p className='text'>Texto de Prueba</p>

    </>
  )
}

export default App
