import "./style.scss"
import { Formik, Form, Field} from "formik"
import axios from "axios"

const ChangeMoney = () => {
  const requestChangeMoney = async ({payment, numberChange}) => {
    const resultChange = document.getElementById("resultChange")
    if (numberChange > payment) {
      resultChange.innerText = "O valor do pagamento é menor que o do caixa"
      return
    }

    try {
      const request = await axios.post("http://127.0.0.1:5000/changedmoney", {payment, numberChange})
      resultChange.innerHTML = `<strong>Notas de 100:</strong> ${request.data["100"]} <br/>
<strong>Notas de 10:</strong> ${request.data["10"] || 0} <br/>
<strong>Notas de 1:</strong> ${request.data["1"] || 0}`
    } catch {
      resultChange.innerText = "Tente novamente"
    }
  }

  return (
    <section>
      <div id="changeMoney">
        <h2>Calcule o seu troco</h2>
        <div id="list">
          <Formik initialValues={{payment: "", numberChange: ""}} onSubmit={requestChangeMoney}>
            <Form>
              <Field type="number" required id="payment" name="payment" placeholder="Pagamento"></Field>
              <Field type="number" required id="numberChange" name="numberChange" placeholder="Valor do produto"></Field>
              <button type="submit" id="cepSubmit">Calcular</button>
            </Form>
          </Formik>
          <div id="resultChange">
            <strong>Notas de 100:</strong>
            <br/>
            <strong>Notas de 10:</strong>
            <br/>
            <strong>Notas de 1:</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangeMoney