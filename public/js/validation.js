window.addEventListener('load', (e) => {

    const loginForm = document.getElementById('login-info');
    const registerForm = document.getElementById('register-info');

    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');
    const rpassword = document.querySelector('input[name="rpassword"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');
    const tos = document.querySelector('input[name="tos"]');

    const errUsername = document.querySelector('#username-valid');
    const errPassword = document.querySelector('#password-valid');
    const errRpassword = document.querySelector('#rpassword-valid');
    const errEmail = document.querySelector('#email-valid');
    const errPhone = document.querySelector('#phone-valid');
    const errTos = document.querySelector('#tos-valid');
   

    const success = document.querySelector('#success');

    if(!registerForm) {
        loginForm.addEventListener('submit', (e) => {
           e.preventDefault();
           success.style.display = "none";
           success.innerText = "";
           
           resetErrLogin();
           const isValid = validateLogin();
           if(isValid) {
               sendReqLogin();
           }
        });

        const validateLogin = () => {
            let isValid = true;

            if(username.value === "") {
                setErr(errUsername, 'Enter a username!');
                isValid = false; 
            }
    
            if (password.value === "") {
                setErr(errPassword, 'Enter a password!');
                isValid = false;
            }
    
            return isValid;
        };

        const setErr = (element, message) => {
            element.style.display = "block";
            element.innerText = message;
        };

        const resetErrLogin = () => {
            errUsername.style.display = "none";
            errPassword.style.display = "none";
        }

        const sendReqLogin = async () => {
            await fetch ('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                })
            })
            // first confirm data sent to server res.json, so another promise here
            .then(() => {
                
                success.style.display = "block";
                success.innerText = "Successfully Logged in!";
            })
            .then(() => {
                window.location.href = '/main';
            })
        };

    } else {

        

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            success.style.display = "none";
            success.innerText = "";
            
            resetErrRegister();
            const isValid = validateRegister();
            if(isValid) {
                sendReqRegister();
            }
         });

         const validateRegister = () => {
            let isValid = true;

            if(username.value === "") {
                setErr(errUsername, 'Enter a username!');
                isValid = false; 
            }
    
            if (password.value === "") {
                setErr(errPassword, 'Enter a password!');
                isValid = false;
            }
    
            if (password.value !== rpassword.value) {
                setErr(errRpassword, 'Both passwords must match!');
                isValid = false;
            }
    
            if(email.value === "") {
                setErr(errEmail, 'Enter an email!');
                isValid = false;
    
            } else if (!email.value === /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ) {
                setErr(errEmail, 'Enter a valid email!');
                isValid = false;
            }

            if (phone.value = "" || isNaN(phone.value)) {
                setErr(errPhone, 'A phone number does not contain letters');
                isValid = false;
            }
            
            if (!phone.value === /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g ) {
                setErr(errPhone, 'Enter a valid phone number!');
                isValid = false;
            }
    
            if(tos.checked === false) {
                setErr(errTos, 'You must accept the ToS!');
                isValid = false;
            }
    
            return isValid;
        };

        const setErr = (element, message) => {
            element.style.display = "block";
            element.innerText = message;
        };

        const resetErrRegister = () => {
            errUsername.style.display = "none";
            errPassword.style.display = "none";
            errRpassword.style.display ="none";
            errPhone.style.display ="none";
            errEmail.style.display ="none";
            errTos.style.display = "none";
        }

        const sendReqRegister = async () => {
            await fetch ('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                    email: email.value,
                    phone: phone.value,
                })
            })
            // first confirm data sent to server res.json, so another promise here
            .then(() => {
                
                success.style.display = "block";
                success.innerText = "Successfully registered your account!";
            })
            // .then(() => {
            //     window.location.href = '/login';
            // })
        };

    }

});