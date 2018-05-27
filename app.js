// Declering consts

const inputUrl = document.querySelector('#urlInputField');
const inputSource = document.querySelector('#sourceInputField');
const inputMedium = document.querySelector('#mediumInputFiled');
const inputCampaignName = document.querySelector('#campaign_nameInputField');
const form= document.querySelector('#inputForm');
const inputSection= document.querySelector('#inputSection');
const inputCard= document.querySelector('#inputCard');
let resultsDiv = document.querySelector('#resultsDiv');
const loaderSection= document.querySelector('#loaderSection');

//Loading event listeners
loadEventListeners();
//Adding event listeners
 function loadEventListeners(){
  form.addEventListener('submit', createUrl);

 }

function createUrl(e){

   //Validating the form
   // console.log(inputUrl.value);
   // console.log(inputSource.value);
   // console.log(inputMedium.value);
   // console.log(inputCampaignName.value);

  if(inputUrl.value =="" || inputSource.value =="" || inputMedium.value =="" || inputCampaignName.value ==""){
   let error= 'Please, fill all the parameters';
   console.log(error);

   //Create error div
   let errorDiv= document.createElement('div');
   errorDiv.className= 'alert alert-danger';
   errorDiv.appendChild(document.createTextNode(error));

   inputSection.insertBefore(errorDiv, inputCard);
   //Display error message with timner
  setTimeout(errorDisappear, 4000);
   function errorDisappear(){
    errorDiv.style.display= 'none';
   } 
   
  } else{
    loaderSection.style.display= 'block';
    setTimeout(loading,1500);
      function loading(){  
      loaderSection.style.display= 'none';  
      }
  
   //Creating new element
  resultDiv= document.createElement('div');
  resultDiv.className= 'card my-4';

  //Creating result input element and adding class to it
  let resultDivInput;
  resultDivInput= document.createElement('h2');
  resultDivInput.className= 'p-4';
    resultDiv.appendChild(resultDivInput);

  //Creating the result output
  let result;
  // result= inputUrl.value + '&' + inputSource.value;
  result= `https://
          ${inputUrl.value}?utm_source=${inputSource.value}&utm_medium=${inputMedium.value}$utm_campaign=${inputCampaignName.value}
          `;
  console.log(result);
  
  resultDivInput.appendChild(document.createTextNode(result));

  // Displaying result div
  setTimeout(displayResults,1500);
    function displayResults(){
    resultsDiv.style.display = 'block';
    resultsDiv.className= 'card-body bg-light lead';
    resultsDiv.innerHTML= resultDivInput.innerHTML;
    console.log(resultDivInput.innerHTML);
    e.preventDefault();
    }
  }
}

