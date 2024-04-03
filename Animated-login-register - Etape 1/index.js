const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

// Récupération des éléments du formulaire de connexion
const loginForm = document.querySelector('.login-section form');
const emailInput = document.querySelector('.login-section input[type="email"]');
const passwordInput = document.querySelector('.login-section input[type="password"]');
const loginButton = document.querySelector('.login-section button');

// Ajout d'un gestionnaire d'événements au clic sur le bouton de connexion
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Empêche le formulaire de se soumettre

  // Vérification des champs d'identifiants
  if (emailInput.value === 'jaketerence@mail.com' && passwordInput.value === 'motdepasse') {
    // Redirection vers la page souhaitée si les identifiants sont corrects
    window.location.href = 'http://127.0.0.1:5501/Carousel%20-%20Etape%202/index.html';
  } else {
    alert('Adresse e-mail ou mot de passe incorrect.'); // Affichage d'un message d'erreur si les identifiants sont incorrects
  }
});