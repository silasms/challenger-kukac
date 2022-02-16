import "./style.scss"
import { Formik, Form, Field } from "formik"
import axios from "axios"

const Palindrome = () => {

  const handleSubmit = async ({valueInitial, valueFinally}) => {
    const result = document.getElementById("result")
    if (valueInitial < 0 || valueFinally < 0) {
      result.innerText = "Ambos valores deve ser maior que zero"
      return
    }
    
    if (valueFinally < valueInitial) {
      result.innerText = "O valor final deve ser maior que o inicial"
      return
    }

    try {
      const request = await axios.post("http://127.0.0.1:5000/palindrome", {numberInitial: valueInitial, numberFinally: valueFinally})
      result.innerText = request.data.join(" - ")
    } catch(error) {
      result.innerText = "Tente novamente"
    }
  }

  return (
    <section>
      <div id="palindrome">
        <h2>Palindromo</h2>
        <Formik initialValues={{valueInitial: '', valueFinally: ''}} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label htmlFor="valueInitial">Valor inicial</label>
              <Field type="number" min={0} name="valueInitial" id="valueInitial"/>
            </div>
            <div>
              <label htmlFor="valueFinally">Valor final</label>
              <Field type="number" min={0} name="valueFinally" id="valueFinally"/>
            </div>
            <br/>
            <button type="submit" id="submitForm">Pesquisar</button>
          </Form>
        </Formik>
        <div id="result"></div>
      </div>
    </section>
  )
}

export default Palindrome