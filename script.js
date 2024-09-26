const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.atribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classlist.add('ativo');
    })
})