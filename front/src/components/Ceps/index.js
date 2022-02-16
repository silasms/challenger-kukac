import "./style.scss"
import { Formik, Form, Field } from "formik"
import axios from "axios"

const Ceps = () => {
  const requestCep = async ({cep1, cep2, cep3, cep4, cep5}) => {
    const result = document.getElementById("resultCep")
    if (cep1.length < 8 || cep2.length < 8 || cep3.length < 8 || cep4.length < 8 ||cep5.length < 8) {
      result.innerText = "Alguns dos ceps está vazios"
    }

    try {
      const request = await axios.post("http://127.0.0.1:5000/ceps", {ceps: [cep1, cep2, cep3, cep4, cep5]})
      const resultado = request.data.reduce((acc, element, i) => {
        return acc + `${i+1} - Bairro: ${element.bairro}   Cep: ${element.cep}   Estado: ${element.localidade}   Endereço: ${element.logradouro} \n \n`
      }, "")
      result.innerText = resultado
    } catch {
      result.innerText = "Tente novamente"
    }
  }

  return (
    <section>
      <div id="ceps">
        <h2>Ceps</h2>
        <div id="list">
          <Formik initialValues={{cep1: "", cep2: "", cep3: "", cep4: "", cep5: ""}} onSubmit={requestCep}>
            <Form>
              <Field type="string" required minLength={8} maxLength={8} id="cep1" name="cep1" placeholder="Digite aqui o cep 1"></Field>
              <Field type="string" required minLength={8} maxLength={8} id="cep2" name="cep2" placeholder="Digite aqui o cep 2"></Field>
              <Field type="string" required minLength={8} maxLength={8} id="cep3" name="cep3" placeholder="Digite aqui o cep 3"></Field>
              <Field type="string" required minLength={8} maxLength={8} id="cep4" name="cep4" placeholder="Digite aqui o cep 4"></Field>
              <Field type="string" required minLength={8} maxLength={8} id="cep5" name="cep5" placeholder="Digite aqui o cep 5"></Field>
              <button type="submit" id="cepSubmit">Pesquisar</button>
            </Form>
          </Formik>
          <div id="resultCep"></div>
        </div>
      </div>
    </section>
  )
}

export default Ceps