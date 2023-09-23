const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

var sliderValue = document.getElementById("sliderValue");
var elementoMovido = document.getElementById("elementoMovido");

slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value + "%";
  valorSlider = slider.value;

  sliderValue.style.transform = "translateX(" + valorSlider + "%)";
});

const buttonSubmit = document.getElementById('submitButton');

buttonSubmit.addEventListener('click', () => {
  event.preventDefault();

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const slider = document.getElementById('slider');
  let lgbt;
  let carbono;
  let esg;
  let valor;
  const comentario = document.getElementById('comment');

  const sim1 = document.getElementById('sim1');
  const sim2 = document.getElementById('sim2');
  const sim3 = document.getElementById('sim3');
  const nao1 = document.getElementById('nao1');
  const nao2 = document.getElementById('nao2');
  const nao3 = document.getElementById('nao3');
  const naotenhocerteza1 = document.getElementById('naotenhocerteza1');
  const naotenhocerteza2 = document.getElementById('naotenhocerteza2');
  const selectRadio = document.querySelectorAll('input[id="selectRadio"]');
  const selectRadioArray = Array.from(selectRadio)
  const elementoMarcado = selectRadioArray.find(select => select.checked);
  if (elementoMarcado) {
    valor = elementoMarcado.value;
  }
  

  function checkQuestion1() {
    if (sim1.checked) {
      lgbt = 'SIM';
    } else if (nao1.checked){
      lgbt = 'NÃO';
    } else if (naotenhocerteza1.checked) {
      lgbt = 'NÃO_TENHO_CERTEZA';
    }
  }

  function checkQuestion2() {
    if (sim2.checked) {
      carbono = 'SIM';
    } else if (nao2.checked){
      carbono = 'NÃO';
    } else if (naotenhocerteza2.checked) {
      carbono = 'NÃO_TENHO_CERTEZA';
    }
  }

  function checkQuestion3() {
    if (sim3.checked) {
      esg = 'SIM';
    } else if (nao3.checked){
      esg = 'NÃO';
    }
  }

  checkQuestion1();
  checkQuestion2();
  checkQuestion3();

  console.log( typeof nome.value);
  console.log( typeof email.value);
  console.log( typeof slider.value);
  console.log( typeof lgbt);
  console.log( typeof carbono);
  console.log( typeof esg);
  console.log( typeof valor);
  console.log( typeof comentario.value);




  const data = {
    name: nome.value,
    comment: comentario.value,
    email: email.value,
    local: 'Brasil',
    questions: [
      {
        id: '1',
        ranger: slider.value
      },
      {
        id: '2',
        result: lgbt
      },
      {
        id: '3',
        result: carbono
      },
      {
        id: '4',
        ranger: valor
      },
      {
        id: '5',
        result: esg
      },
    ]
  }

  const apiUrl = 'http://localhost:8080/feedback';

  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }

  fetch(apiUrl, requestOptions).then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação POST');
    }
    return response.json();
  }).then(data => {
    console.log('Resposta da API: ', data);
      // Clear input fields after submitting
      nome.value = '';
      email.value = '';
      slider.value = ''; // Assuming this should be reset as well
      comentario.value = '';

      // Reset radio buttons and select
      sim1.checked = false;
      nao1.checked = false;
      naotenhocerteza1.checked = false;
      sim2.checked = false;
      nao2.checked = false;
      naotenhocerteza2.checked = false;
      sim3.checked = false;
      nao3.checked = false;

      // Clear the sliderValue element
      sliderValue.textContent = '';

  }).catch(error => {
    console.error('Erro: ', error);
     // Clear input fields after submitting
     nome.value = '';
     email.value = '';
     slider.value = ''; // Assuming this should be reset as well
     comentario.value = '';

     // Reset radio buttons and select
     sim1.checked = false;
     nao1.checked = false;
     naotenhocerteza1.checked = false;
     sim2.checked = false;
     nao2.checked = false;
     naotenhocerteza2.checked = false;
     sim3.checked = false;
     nao3.checked = false;

     // Clear the sliderValue element
     sliderValue.textContent = '';
  })
})