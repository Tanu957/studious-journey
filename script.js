function form_validation ()
      {
        const name= document.getElementById("name");
        const password= document.getElementById("password");
        const phone_number= document.getElementById("number") ;
        const email= document.getElementById("email");
        const address= document.getElementById("address");
        
        if (username.value.length < 2 || username.value.length > 20){
          window.aleart("please enter your name")
          username.focus();
          return false;
        }
        if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
          window.aleart("please enter your password")
          password.focus();
          return false;
        }
        if (number.value.match(/^[1-9][0-9]{9}$/)){
          window.aleart("please enter your number")
          number.focus();
          return false;
        }
        if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          window.aleart("please enter a valid e-mail!")
          email.focus();
          return false;
        }
        if (address.value.length < 2 || username.value.length > 100){
          window.aleart("please enter your address")
          address.focus();
          return false;
        }
        return true;
      }