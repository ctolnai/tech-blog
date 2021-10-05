const postHandler = async () => {

    const post = document.querySelector('#newPost').value.trim();
   
      const response = await fetch('/api/users/posts', {
        method: 'POST',
        body: JSON.stringify({ post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Could not Post');
      }
  };
  
  document
    .querySelector('#btn-primary')
    .addEventListener('click', (event) => {
      event.preventDefault()
      postHandler()
    });
  