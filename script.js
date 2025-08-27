let passwordBox=document.getElementById("password");
let length=12;

function generate(){
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password='';
    do{
        password+= charset[Math.floor(Math.random()*charset.length)];
    }while(password.length<length);
    passwordBox.value = password;
    password='';
}
 function copypass(){
    passwordBox.select();
    document.execCommand("copy");
 }
