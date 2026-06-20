
<script>
    // Função para destacar a lição clicada
    const linhas = document.querySelectorAll('tbody tr');
    
    linhas.forEach(linha => {
        linha.classList.add('li-item');
        linha.addEventListener('click', function() {
            alert("Você selecionou: " + this.cells[1].innerText);
            // Aqui poderias abrir um modal com o resumo da lição
        });
    });

    console.log("Sistema do Luz Eterna carregado com sucesso!");
</script>
