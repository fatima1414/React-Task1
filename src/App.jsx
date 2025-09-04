import Header from './Layout/Header';
import Home from './Pages/Home';
import Card from './Pages/Card';
import CardUi from './Layout/CardUi';
import About from './Pages/About';
import CardClass from './ClassComponent/CardClass';
import ServicesClass from './ClassComponent/ServicesClass';
import Service from './Pages/Services';
// import Counter from './ClassComponent/Counter';
// import ConterFn from './Pages/CounterFn';
// import Api from './Pages/Api';
import UseEffectHook from './Pages/UseEffectHook';
import FormHandel from './Pages/FormHandel'
import Form from './Pages/Form'
import Footer from './Layout/Footer';



function App() {
  return (
    <>
      <Header />
      <Home/>
      <Card />
      {/* <CardUi title="natural" para="How glorious a greeting the sun gives the mountains!"/> */}
      {/* <About /> */}
      <h1>service</h1>
      <Service />
      {/* <ServicesClass/> */}
      <h1>card class</h1>
      <CardClass/>
      {/* <Counter/> */}
      {/* <Api/> */}
      {/* <UseEffectHook/>  */}
      {/* <ConterFn/> */}
      {/* <FormHandel/> */}
      {/* <Form/> */}





      <Footer />
    </>
  )
}
export default App