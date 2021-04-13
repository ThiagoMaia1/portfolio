import MainPage from './components/Main/MainPage/MainPage';
import ReactDOMServer from "react-dom/server";

function App() {

  // setTimeout(() => console.log(ReactDOMServer.renderToStaticMarkup(<App/>)), 5000);

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}
export default App;
