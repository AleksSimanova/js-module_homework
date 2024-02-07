document.querySelector(`#btm-reg`).addEventListener(`click`,(event)=>{
    event.preventDefault();

const email= document.querySelector(`#emailReg`);
const libelEmail=document.querySelector(`#emailRegLabel`)
const StastEmail=document.querySelector(`#emailRegStar`)
const textEmail=document.querySelector(`#regEmailText`)

const password=document.querySelector(`#pswReg`);
const libelPassword=document.querySelector(`#pswRegLabel`)
const StastPassword=document.querySelector(`#pswRegStar`)
const textPassword=document.querySelector(`#regPasswordText`)

const checkbox= document.querySelector(`#checkboxReg`);
const MarketCheckbox=document.querySelector(`.checkmark`)
const StastCheckbox=document.querySelector(`#checkboxRegStar`)
const textCheckbox=document.querySelector(`#regCheckboxText`);

let validate=true;


// emailValue
const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
let emailValue=re.test(String(email.value).toLowerCase());

if(emailValue){
    email.style.borderColor=``;
    libelEmail.style.color=``;
    StastEmail.style.color=``;
    textEmail.style.opacity=0;
    console.log(1);
}else{
    email.style.borderColor=`red`
    libelEmail.style.color=`red`
    StastEmail.style.color=`red`
    textEmail.style.opacity=`1`
    validate=false
    console.log(2);
};

// password
console.log(password.value.length);
if(password.value.length >= 8){
    password.style.borderColor=``;
    libelPassword.style.color=``;
    StastPassword.style.color=``;
    textPassword.style.opacity=`0`;
    console.log(3);
} else{
    password.style.borderColor=`red`;
    libelPassword.style.color=`red`;
    StastPassword.style.color=`red`;
    textPassword.style.opacity=`1`;
    validate=false;
    console.log(4);
}
// checkbox
if(checkbox.checked){
    checkbox.style.borderColor=``
    MarketCheckbox.style.borderColor=``
    StastCheckbox.style.color=``
    textCheckbox.style.opacity=`0`
    console.log(5);
}else {
    checkbox.style.borderColor=`red`
    MarketCheckbox.style.borderColor=`red`
    StastCheckbox.style.color=`red`
    textCheckbox.style.opacity=`1`
    validate=false;
    console.log(6);
}
if (validate){
    const data=
        {
        email: email.value.toLowerCase(),
        password : password.value
        }
    

    if(localStorage.getItem(`data`)){
        let localDate=localStorage.getItem(`data`);
        localDate=JSON.parse(localDate);
        console.log(localDate.filter((user)=>user.email===email.value).length);

        console.log(localDate.filter((user)=>user.email===email.value));

        if (localDate.filter((user)=>user.email===email.value).length){
            alert(`пользователь с  таким адресом существует`);
        }else{
            localDate.push(data);
            localStorage.setItem(`data`, JSON.stringify(localDate));
            alert(`пользователь сохранен`);
        };
    }else{
        localStorage.setItem(`data`, JSON.stringify([data]));
        alert(`пользователь сохранен`);
    } 
}
})

// авторизация
document.querySelector('#btm-aut').addEventListener('click',(event)=>{event.preventDefault()


    const email= document.querySelector(`#emailAut`);
    const libelEmail=document.querySelector(`#emailAutLabel`)
    const StastEmail=document.querySelector(`#emailAutStar`)
    const textEmail=document.querySelector(`#autEmailText`)
    
    const password=document.querySelector(`#pswAut`);
    const libelPassword=document.querySelector(`#pswAutLabel`)
    const StastPassword=document.querySelector(`#pswAutStar`)
    const textPassword=document.querySelector(`#autPasswordText`)
    
    const checkbox= document.querySelector(`#checkboxAut`);
    const MarketCheckbox=document.querySelector(`.checkmark`)
    const StastCheckbox=document.querySelector(`#checkboxAutStar`)
    const textCheckbox=document.querySelector(`#autCheckboxText`);
    


const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
let emailValid=re.test(String(email.value).toLowerCase()); 

let validate=true;

// emailValid
if(emailValid){
    email.style.borderColor=``;
    libelEmail.style.color=``;
    StastEmail.style.color=``;
    textEmail.style.opacity=0;
}else{
    email.style.borderColor=`red`
    libelEmail.style.color=`red`
    StastEmail.style.color=`red`
    textEmail.style.opacity=`1`
    validate=false
};

// password
console.log(password.value.length);
if(password.value.length >= 8){
    password.style.borderColor=``;
    libelPassword.style.color=``;
    StastPassword.style.color=``;
    textPassword.style.opacity=`0`;
} else{
    password.style.borderColor=`red`;
    libelPassword.style.color=`red`;
    StastPassword.style.border=`red`;
    textPassword.style.opacity=`1`;
    validate=false;
}
// checkbox
if(checkbox.checked){
    checkbox.style.borderColor=``;
    MarketCheckbox.style.borderColor=``;
    StastCheckbox.style.color=``;
    textCheckbox.style.opacity=`0`;
}else {
    checkbox.style.borderColor=`red`;
    MarketCheckbox.style.borderColor=`red`;
    StastCheckbox.style.color=`red`;
    textCheckbox.style.opacity=`1`;
    validate=false;
}

if (validate){
    const data={
        email: email.value.toLowerCase(),
        password: password.value
    };

    if(localStorage.getItem(`data`)){
        let localDate=localStorage.getItem(`data`);
        localDate=JSON.parse(localDate);
        {
            console.log("прверка пароля");

            if (localDate.filter((user)=>user.email===email.value).length){ 
                if (localDate.filter((user)=>user.email===email.value)[0].password===password.value){
                alert(`успешно зашли`) 
                }else{
                    alert(`не верные данные`);
                }
            } else { 
                alert(`не верные данные`);
            } 
        }
    }else{ 
        alert(`не верные данные`);
    }
}
})



document.querySelector('#toggle-btn-aut').addEventListener ('click',(even)=>{
    even.preventDefault();
    document.querySelector('.form-aut').style.display='none';
    document.querySelector('.form-reg').style.display='block';
})


document.querySelector('#toggle-btm-reg').addEventListener('click',(even)=>{
    even.preventDefault();
    document.querySelector('.form-reg').style.display='none';
    document.querySelector('.form-aut').style.display='block'
    
}) 