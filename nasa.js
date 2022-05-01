let speech = new SpeechSynthesisUtterance
speech.lang= "en"


document.querySelector('button').addEventListener('click', getSpeech,getDate);
function getSpeech() {
  speech.text= document.querySelector('h3').innerText
  window.speechSynthesis.speak(speech)
  getDate()
}
  function getDate() {
    let pastData = document.querySelector('input').value ;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=ncDIWQXNBO5y9mKuwu9cVcBf1Dm19esPMjow9qy3&date=${pastData}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    console.log(data)
    if(data.media_type === 'image'){
    document.querySelector('img').src = data.hdurl;
    }else if(data.media_type === 'video'){
    document.getElementById('video').style.display= 'block';
    document.querySelector('img').style.display= 'none';
    document.getElementById('video').src = data.url
    }
  document.querySelector('h3').innerText = data.explanation; 
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
       
    } 