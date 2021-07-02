import Header from './header/Header.js'
import ImageGenerator from './generator/imageGenerator/imageGenerator.js'
import About from './about/About.js'
import './app.css'

let images = <ImageGenerator />

function App() {

  return (
    <div className="App">
      <Header />
      { images }
      <About />
    </div>
  )}

export default App;
