function initContactForm() {

    const formSendBtn = document.getElementById("sendMessageBtn");

    if (!formSendBtn) return;

    formSendBtn.addEventListener("click", function (e) {       

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const body =
        `   Hello Vivek,
            Name: ${name}
            Email: ${email}
            Message:
            ${message}`;

        if(name && email && subject && message) {

            const mailto = `mailto:vivekthefriend@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            e.preventDefault();
            window.open(mailto, "_blank");
        }

    });

}

export default initContactForm;