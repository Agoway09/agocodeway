function executarCodigo() {
    const codigo = document.getElementById("codigoInput").value;
    const resultado = document.getElementById("resultado");

    resultado.srcdoc = codigo;
}
