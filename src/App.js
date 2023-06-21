import './App.css';
import Post from "./Post"
import Header from "./Header"

function App() {
  return (
    <Routes>
      <Route index element = {
        <main>
        <Header />
        <Post />
    </main>
      } />
    </Routes>
    
  );
}

export default App;
