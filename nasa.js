document.querySelector('button').addEventListener('click', getDate);
  function getDate() {
    let pastData = document.querySelector('input').value ;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=ncDIWQXNBO5y9mKuwu9cVcBf1Dm19esPMjow9qy3&date=${pastData}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    console.log(data)
    document.querySelector('img').src = data.hdurl;
  document.querySelector('h3').innerText = data.explanation;   
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
       
    } 