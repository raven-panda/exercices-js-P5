//votre code ici

function printNumbers(index) {
  let result = "";
  for (let i = 0; i < index; i++) {
    result += `${i + 1} `;
  }

  return result.trim();
}

export default printNumbers
