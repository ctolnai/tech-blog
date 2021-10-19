const logout = async () => {
    
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert("You are already logged out. You will now be redirected to the home page");
      document.location.replace('/');
    }
  };

  document.querySelector('#logout').addEventListener('click', logout);