const post = async (event) => {
event.preventDefault()
  const title = document.querySelector('#newTitle').value.trim();
  const post = document.querySelector('#newPost').value.trim();
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, post }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };


  document.querySelector('.postButton').addEventListener('click', post);