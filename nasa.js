let speech = new SpeechSynthesisUtterance
speech.lang= "en"


document.querySelector('#picturebutt').addEventListener('click', getDate);
  function getDate() {
    let pastData = document.querySelector('input').value ;
    document.querySelector('#plea').style.display= 'block';

    fetch(`https://api.nasa.gov/planetary/apod?api_key=ncDIWQXNBO5y9mKuwu9cVcBf1Dm19esPMjow9qy3&date=${pastData}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    console.log(data)
    if(data.media_type === 'image'){
    document.querySelector('img').style.display = 'block';
    document.querySelector('img').src = data.hdurl;
    document.querySelector('iframe').style.display = 'none';
    
    }else if(data.media_type === 'video'){
      document.querySelector('iframe').style.display = 'block';
      document.querySelector('img').style.display = 'none';
    document.getElementById('video').src = data.url
    }
  document.querySelector('h3').innerText = data.explanation; 
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
       
    } 

    document.querySelector('#read').addEventListener('click', getSpeech);  
    function getSpeech() {
      speech.text= document.querySelector('h3').innerText
      window.speechSynthesis.speak(speech)
      getDate()
    }

    document.querySelector("#pause").addEventListener("click", function(){
      window.speechSynthesis.pause(speech);
  });
  
  
  document.querySelector("#resume").addEventListener("click", function(){
      window.speechSynthesis.resume(speech);
  });
  
  
  document.querySelector("#cancel").addEventListener("click", function(){
      window.speechSynthesis.cancel(speech);
  })
  