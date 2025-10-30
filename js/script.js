document.querySelectorAll('#themeSwitch, #themeSwitchProducts, #themeSwitchSobre').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    alert('Modo cambiado: ' + (document.body.classList.contains('dark') ? 'Oscuro' : 'Claro'));
  });
});