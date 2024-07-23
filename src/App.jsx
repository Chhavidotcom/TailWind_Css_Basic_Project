import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  

  return (
    <>
      <div className="min-h-screen px-6 py-3 bg-green-200 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:justify-between">
      <Header/>
      <Body/>
      <Footer/>

       
      </div>
    </>
  )
}

export default App
