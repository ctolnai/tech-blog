function getTheCall(data) {
        const comment = async (event) => {
            event.preventDefault()
              const comment = document.querySelector('#newComment').value.trim();
                const response = await fetch(`/api/comment/${data}`, {
                  method: 'POST',
                  body: JSON.stringify({ comment, data }),
                  headers: { 'Content-Type': 'application/json' },
                });
              
                if (response.ok) {
                  document.location.replace('/');
                } else {
                  alert(response.statusText);
                }
              };
        console.log(data)
    }
    
      //document.querySelector('.commentButton').addEventListener('click', comment);