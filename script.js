
    function sendEmail(event) {
      event.preventDefault();

      // Obtén los valores del formulario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Crea el cuerpo del correo con los valores del formulario
      const subject = "New Message from " + name;
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

      // Crea el enlace mailto con los datos del formulario
      const mailtoLink = `mailto:contacto.lotusmint@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Redirige al usuario al enlace mailto (abre su cliente de correo)
      window.location.href = mailtoLink;
    }
