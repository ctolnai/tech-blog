const post = async () => {
    
    const response = await fetch('/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  console.log(document.querySelector('#comment'))

  document.querySelector('#comment').addEventListener('click', (event) => {
    event.preventDefault()
    logout()
  } );