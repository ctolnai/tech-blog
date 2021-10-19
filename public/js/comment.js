
        const comment = async (event) => {
            event.preventDefault()
            const id = document.location.pathname.split("/")
            console.log(id)
            
              const body = document.querySelector('#newComment').value.trim();
                const response = await fetch(`/api/comment/${id[2]}`, {
                  method: 'POST',
                  body: JSON.stringify({ body }),
                  headers: { 'Content-Type': 'application/json' },
                });
              
                if (response.ok) {
                  document.location.replace('/');
                } else {
                  alert(response.statusText);
                }
              };

    
      document.querySelector('.commentButton').addEventListener('click', comment);