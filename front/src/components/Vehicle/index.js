import "./style.scss"
import { Formik, Form, Field } from "formik"
import axios from "axios"

const Vehicle = () => {
  const requestCar = async ({model, year, brand, doors}) => {
    const result = document.getElementById("vehicleCep")
    try {
      await axios.post("http://127.0.0.1:5000/veh/car", {model, year, brand, doors})
      result.innerText("Salvo com sucesso")
    } catch {
      result.innerText("Tente novamente")
    }
  }

  const requestMoto = async ({modelMoto, yearMoto, brandMoto, passengersMoto}) => {
    const result = document.getElementById("vehicleCep")
    try {
      await axios.post("http://127.0.0.1:5000/veh/motocycle", {model: modelMoto, year: yearMoto, brand: brandMoto, passengers: passengersMoto})
      result.innerText("Salvo com sucesso")
    } catch {
      result.innerText("Tente novamente")
    }
  }

  const listAllVehicles = async() => {
    const result = document.getElementById("vehicleCep")
    try {
      const request = await axios.get("http://127.0.0.1:5000/veh")
      let message = ""
      request.data.forEach((el, i) => {
        console.log(el)
        message += `${i} - Modelo: ${el.model} | Ano: ${el.year} | Marca: ${el.brand} | ${el.doors? "Portas": "Passageiros"}: ${el.doors || el.passengers} ${el.wheels ? "Quantidade de rodas: " + el.wheels: ""}
`
      })
      result.innerText = message
    } catch {
      result.innerText = "Tente novamente"
    }
  }

  return (
    <section>
      <div id="vehicles">
        <h2>Cadastre o veículo</h2>
        <div id="list">
          <div id="car">
            <h3 style={{textAlign: "center"}}>Carro</h3>
            <Formik initialValues={{model: "", year: "", brand: "", doors: ""}} onSubmit={requestCar}>
              <Form>
                <label htmlFor="model">Modelo:</label>
                <Field type="string" id="model" required name="model" placeholder="Modelo do veículo"></Field>
                
                <label htmlFor="year">Ano:</label>
                <Field type="number" id="year" min={0} required name="year" placeholder="Ano do veículo"></Field>
                
                <label htmlFor="brand">Marca:</label>
                <Field type="string" id="brand" required name="brand" placeholder="Marca do veículo"></Field>
                
                <label htmlFor="doors">Portas:</label>
                <Field type="number" id="doors" required name="doors" placeholder="Quantidade de portas"></Field>
                <button type="submit" id="cepSubmit">Salvar</button>
              </Form>
            </Formik>
          </div>
          <div id="motocycle">
          <h3 style={{textAlign: "center"}}>Moto</h3>
            <Formik initialValues={{modelMoto: "", yearMoto: "", brandMoto: "", passengersMoto: ""}} onSubmit={requestMoto}>
              <Form>
                <label htmlFor="modelMoto">Modelo:</label>
                <Field type="string" id="modelMoto" required name="modelMoto" placeholder="Modelo do veículo"></Field>
                
                <label htmlFor="yearMoto">Ano:</label>
                <Field type="number" id="yearMoto" min={0} required name="yearMoto" placeholder="Ano do veículo"></Field>
                
                <label htmlFor="brandMoto">Marca:</label>
                <Field type="string" id="brandMoto" required name="brandMoto" placeholder="Marca do veículo"></Field>
                
                <label htmlFor="passengersMoto">Passageiros:</label>
                <Field type="number" id="passengersMoto" max={2} min={1} required name="passengersMoto" placeholder="Quantidade de portas"></Field>
                <button type="submitMoto" id="cepSubmit">Salvar</button>
              </Form>
            </Formik>
          </div>
        </div>
          <button onClick={listAllVehicles}>Listar todos os veículos</button>
          <div id="vehicleCep"></div>
      </div>
    </section>
  )
}

export default Vehicle