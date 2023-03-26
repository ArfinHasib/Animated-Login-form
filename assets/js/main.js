/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    // Change password to text
    if (input.type === 'password') {
      // switch to text
      input.type = 'text';

      // Icon change
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      // switch to pass
      input.type = 'password';

      // Icon change
      iconEye.classList.add('ri-eye-off-line');
      iconEye.classList.remove('ri-eye-line');
    }
  });
};

showHiddenPass('login-pass', 'login-eye');
