// votre code ici

function checkAge(age) {
    if (age < 18) {
        return `Vous êtes mineur.`;
    } else if (age >= 65) {
        return `Vous êtes senior.`;
    } else {
        return `Vous êtes majeur.`;
    }
}

export default checkAge;
