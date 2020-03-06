function signupForm(apiUrl){
    'use strict';
    if (document.getElementById("loginli").style.display != 'none'){
        document.getElementById("loginli").style.display = 'none';
        document.getElementById("searchli").style.display = 'none';
        let unameli = document.createElement("li");
        let pswli = document.createElement("li");
        // let emailli = document.createElement("li");
        // let nameli = document.createElement("li");
        unameli.id = 'unameli';
        pswli.id = 'pswli';
        // emailli.id = 'emailli';
        // nameli.id = 'nameli';
        unameli.classList.add("nav-item");
        pswli.classList.add("nav-item");
        // emailli.classList.add("nav-item");
        // nameli.classList.add("nav-item");
        let uname = document.createElement("input");
        let psw = document.createElement("input");
        // let email = document.createElement("input");
        // let name = document.createElement("input");
        uname.id = "uname";
        psw.id = "psw";
        // email.id = "email";
        // name.id = "name";
        uname.placeholder = "Enter Username";
        psw.placeholder = "Enter Password";
        // name.placeholder = "Enter Name";
        // email.placeholder = "Enter Email";
        uname.required = true;
        psw.required = true;
        // name.required = true;
        // email.required = true;
        psw.type = 'password';
        unameli.appendChild(uname);
        pswli.appendChild(psw);
        // emailli.appendChild(email);
        // nameli.appendChild(name);
        document.getElementById("list").insertBefore(unameli, document.getElementById("list").childNodes[2]);
        document.getElementById("list").insertBefore(pswli, document.getElementById("list").childNodes[3]);
        // document.getElementById("list").insertBefore(emailli, document.getElementById("list").childNodes[4]);
        // document.getElementById("list").insertBefore(nameli, document.getElementById("list").childNodes[5]);
    }
    else{
        var payload = {
            username: uname.value,
            password: psw.value,
            email: '',
            name: ''
        }
        document.getElementById("loginli").style.display = '';
        document.getElementById("searchli").style.display = '';
        document.getElementById('unameli').remove();
        document.getElementById('pswli').remove();
        // document.getElementById('emailli').remove();
        // document.getElementById('nameli').remove();
        const url = ''.concat(apiUrl, '/auth/signup');
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json)
        .then(function(response){
            if(json.token == null){
                alert(json.message);
            }
        });
    }
}

export default signupForm;