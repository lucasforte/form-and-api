function onFormSubmit() {
  let name = document.getElementById('name');
  let birthday = document.getElementById('bithday');
  let cpf = document.getElementById('cpf');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');


}

const getCepInfo = async () => {
  const cep = document.getElementById('cep').value;

  const url = "https://api.postmon.com.br/v1/cep/" + cep;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

const fillAddressFields = async () => {
  const streetField = document.getElementById('street');
  const neighborhoodField = document.getElementById('neighborhood');
  const cityField = document.getElementById('city');
  const stateField = document.getElementById('state');

  const addressData = await getCepInfo();

  if (addressData) {
    streetField.value = addressData.logradouro;
    neighborhoodField.value = addressData.bairro;
    cityField.value = addressData.cidade;
    stateField.value = addressData.estado_info.estado;
  }
  return;
}