const form=document.querySelector('#form');
const email=document.querySelector('.email');
const password=document.querySelector('.password');


const showError=(input,message)=>
{
    let parentElement=input.parentElement;
    parentElement.classList="form-control error";
    const small=parentElement.querySelector('small');
    small.innerText=message;

}

const showSuccess=(input)=>
{
    let parentElement=input.parentElement;
    parentElement.classList="form-control success";
}

const checkRequired=(elements)=>
{
    elements.forEach(element => {
        if(element.value==="")
        {
            showError(element,"input required")
        }
        else
        {
            showSuccess(element);
        }
        
    });
}


const checkEmail=(input)=>
{
    let reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(input.value))
    {
        showSuccess(input)
    }
    else
    {
        showError(input,'email is not correct way');
    }
}

const passwordLength=(input,min,max)=>
{
    if(input.value.length < min)
    {
        showError(input,`password must be greater than ${min}`)
    }
    else if(input.value.length >max)
    {
        showError(input,`password must be less than ${max}`)
    }
}


form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    checkRequired([email,password]);
    checkEmail(email);
    passwordLength(password,6,10)
});