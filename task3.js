export function calculadoraEdad(y, m, d) {

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

    // console.log({ currentYear, currentMonth, currentDay });

    let age = currentYear - y;

    if (currentMonth < m) {
        return age - 1;
    }

    if (currentMonth === m) {
        if (currentDay < d) {
            return age - 1;
        }
    }
    // console.log({ age });

    return age;
}

// calculadoraEdad();