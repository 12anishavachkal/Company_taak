// Task 1

import Banner from './Components/Banner'
import Container from "./Components/Container";
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Tab from "./Components/Tab";
import Tabs2 from "./Components/Tabs2";
import Wizard from './Components/Wizards';
const App = () => {

  return (
    <div style={{ backgroundColor: '#bdc3c7' }}>
      <Header />
      <Banner />
      <Container />
      <div style={{
        display: 'flex'
        , justifyContent: 'space-evenly',
        flexDirection: 'row'
      }}>
        <Tab />
        <Tabs2 />
      </div>

      <Wizard />
      <Footer />
    </div>
  )
}

export default App

