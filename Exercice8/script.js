//Votre code ici

function add(n1, n2) {
  if (typeof n1 === 'string')
    n1 = parseFloat(n1);
  if (typeof n2 === 'string')
    n2 = parseFloat(n2);

  return n1 + n2;
}

export default add;
