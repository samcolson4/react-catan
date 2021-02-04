import Header from './header/Header.js'
import TextGenerator from './generator/textGenerator/textGenerator.js'
import ImageGenerator from './generator/imageGenerator/imageGenerator.js'
import About from './about/About.js'
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <TextGenerator />
      <ImageGenerator />
      <About />
    </div>
  )}

export default App;
