const maskCpf = (cpf) => {
  
  if(cpf.length > 14) {
    return cpf?.substring(0, 14);
  }
  
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length <= 3) {
    cpf = cpf.replace(/(\d{0,3})/, '$1');
  } else if (cpf.length <= 6) {
    cpf = cpf.replace(/(\d{0,3})(\d{0,3})/, '$1.$2');
  } else if (cpf.length <= 9) {
    cpf = cpf.replace(/(\d{0,3})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
  } else {
    cpf = cpf.replace(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4');
  }

  return cpf;
};

const hideCPF = (cpfNumbers) => {
  var cpf = cpfNumbers.replace(/[^\d]/g, "");
  var cpfHidden = "";

  for (var i = 0; i < cpf.length; i++) {
    if (i == 3 || i == 6) {
      cpfHidden += ".";
    } else if (i == 9) {
      cpfHidden += "-";
    }
    cpfHidden += "*";
  }
  return cpfHidden;
}

export { maskCpf, hideCPF };
