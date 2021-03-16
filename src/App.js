import './App.css';
import Data from "./data";
import Question from "./Question"
const App = () => {
  return (
    <main className="Container">
      <h1>Questions And Answers About Login</h1>
      <section>
        {Data.map((element) => {
          return (
            <Question {...element} key={element.id} />
          )
        })}
      </section>
    </main>
  )
}


export default App;