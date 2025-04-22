const hidden = document.querySelectorAll('.reveal');
hidden.forEach((p)=>{p.style.display = 'none'})

const reveal = (id) => {
    const children = document.getElementById(id).children
    children[0].style.display = 'none'
    children[1].style.display = 'block'
}

const hide = (id) => {
    const children = document.getElementById(id).children
    children[1].style.display = 'none'
    children[0].style.display = 'block'
}

let cur = 'home'
const switchTo = (id) => {
    if(cur){
        document.getElementById(cur).style.display = "none"
        document.getElementById(`title-${cur}`).classList.add("shadow")

    }
    document.getElementById(id).style.display = "block"
    document.getElementById(`title-${id}`).classList.remove("shadow")

    cur = id
}

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: 'LwBu1kSMnPSDQfHkB',
    });
})();


window.onload = function() {
    const form = document.getElementById('survey')
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_nxv08fu', 'template_05w109j', this)
            .then(() => {
                console.log('SUCCESS!');
                form.reset()
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}