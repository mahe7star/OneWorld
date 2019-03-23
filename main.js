(function(){
  const subscribeBtn = document.getElementsByClassName('btn-subscribe')[0];
  const subscribeTxt = document.getElementsByClassName('form-control')[0];
  subscribeBtn.addEventListener('click', function() {
    subscribeTxt.classList.toggle('expand');
    this.innerText === 'I\'m in' ? this.innerText = 'Submit' : this.innerText = 'Thanks';
  });
  const fetchAPI = function() {
    fetch('https://randomuser.me/api/')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          return data.results[0];
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  const image  = fetchAPI();
  console.log(image)

})();