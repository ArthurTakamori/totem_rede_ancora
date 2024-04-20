const maskCpf = (cpf) => {
  // Adicionar a formatação
  if (cpf.length > 3 && cpf.length <= 6)
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  else if (cpf.length > 6 && cpf.length <= 9)
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  else if (cpf.length > 9)
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");

  return cpf;
};

function hideCPF(cpfNumbers) {
  // Remover qualquer formatação que já possa existir
  let cpf = cpfNumbers.replace(/[^\d]/g, "");

  // Substituir os números por asteriscos, exceto o último
  let cpfEscondido = "";

  for (let i = 0; i < cpf.length; i++) {
    if (i == 3 || i == 6) {
      cpfEscondido += ".";
    } else if (i == 9) {
      cpfEscondido += "-";
    }
    cpfEscondido += "*";
  }
  return cpfEscondido;
}

export { maskCpf, hideCPF };
