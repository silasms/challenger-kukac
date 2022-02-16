import "./style.scss"
import Header from "../../components/Header"
import Palindrome from "../../components/Palindrome"
import Ceps from "../../components/Ceps"
import ChangeMoney from "../../components/ChangeMoney"
import Vehicle from "../../components/Vehicle"

const Home = () => {
  return(
    <>
      <Header/>
      <main id="main">
        <Palindrome/>
        <Ceps/>
        <ChangeMoney/>
        <Vehicle/>
      </main>
    </>
  )
}

export default Home