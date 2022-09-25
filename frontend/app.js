// navbar
const iconBtn = document.querySelector('.icon i');
const navUl = document.querySelector('nav ul');

iconBtn?.addEventListener('click', () => {
    navUl.classList.toggle("active");

    if (navUl.classList.contains('active')) {
        iconBtn.setAttribute("class", "bx bx-x")
    } else {
        iconBtn.setAttribute("class", "bx bx-menu-alt-right")
    }
})
// navbar



// password icon toggle
const passwordIcon = document.querySelectorAll(".password-icon i");

for (let x = 0; x < passwordIcon.length; x++) {
    passwordIcon[x]?.addEventListener("click", (e) => {
        const passwordInput = e.target.parentElement.parentElement.children[0];
        let passwordIcon = e.target;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.setAttribute("class", "bx bx-hide")
        } else {
            passwordInput.type = "password";
            passwordIcon.setAttribute("class", "bx bxs-show")
        }
    })
}

// password icon toggle



const addform = document.querySelector('#submitform');
const spinner = document.querySelector('#spinner');



// add user



addform?.addEventListener('submit', async (e) => {
    e.preventDefault();
    spinner.classList.remove('hidden');

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const country = document.querySelector('#country');

    if (!name.value || !email.value || !phone.value || !country.value) {
        swal("Opps!", "All field must required", "error");
        spinner.classList.add('hidden');
        return false;
    }
    if (name.value.length < 3) {
        swal("Opps!", "name must be 3 letters", "error");
        spinner.classList.add('hidden');
        return false;
    }

    const details = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        country: country.value
    }
    try {
        const { data } = await axios.post(`https://practice.trustpointit.com/todo/save`, details);
        console.log(data);
        spinner.classList.add('hidden');
        reaData();
        swal("Good job!", "Data inserted successfully", "success");

        name.value = "";
        email.value = "";
        phone.value = "";
        country.value = "";
    } catch (err) {
        console.log(err);
        spinner.classList.add('hidden');
        swal("Opps!", "Data inserted faild", "error");
    }


})


// add user

const deleteFun = async (id) => {

    try {
        if (confirm('are you sure,want to delete')) {
            const data = await axios.delete(`https://practice.trustpointit.com/todo/delete/${id}`);
            reaData();
            swal("Good job!", "Data delete", "success");
        }

    } catch (err) {
        swal("Opps!", "Data delete faild", "error");
    }

}






const showData = (val) => {
    let id = 1;
    const tblBody = document.querySelector('#tblbody');
    tblBody.innerHTML = "";
    val.forEach((data) => {
        let tableitem = `<tr>
        <td>${id}</td>
        <td>emaon</td>
        <td>emon@gmail.com</td>
        <td>01722761605</td>
        <td>bangladesh</td>
        <td>
            
            <button onclick="deleteFun('${data._id}')"
                class="w-16 mt-1 md:mt-0 rounded-md h-10 ml-2 text-white bg-red-600 ">delete</button>

        </td>
    </tr>`;

        tblBody.innerHTML += tableitem;
        id++;
    })

}

// show user


const reaData = async () => {
    try {
        const { data } = await axios.get(`https://practice.trustpointit.com/todo`);
        showData(data.data)
    } catch (err) {
        console.log(err);
    }

}

reaData();
// show user



// sign up validation
const validatorFun = (id, type) => {
    const inputVal = document.querySelector(id).value;
    if (!inputVal) {
        return swal("Opps!", "all field required", "error");
    }
    if (type === "password") {
        if (inputVal.length < 5) {
            return swal("Opps!", "password must be 5 letters", "error");
        }
    }

    swal("", "done", "success")

}
const signupForm = document.querySelector("#signupform");

signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = validatorFun("#username", "text");
    const email = validatorFun("#useremail", "email");
    const phone = validatorFun("#userphone", "text");
    const country = validatorFun("#usercountry", "text");
    const password = validatorFun("#userpassword", "password");
    const confirmPassword = validatorFun("#userconfirmpassword", "password");

})
// sign up validation


