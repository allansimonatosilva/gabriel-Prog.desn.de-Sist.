function buscarLivro(catalogo, nomeLivro) {
    const indice = catalogo.indexOf(nomeLivro);
    if (indice !== -1) {
        return indice; 
        console.log("Erro: Não foi possivel encontrá-lo."); 
    }
}