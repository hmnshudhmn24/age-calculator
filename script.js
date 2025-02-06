const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate');
const ageDisplay = document.getElementById('age');
const nextBirthdayDisplay = document.getElementById('nextBirthday');

calculateButton.addEventListener('click', () => {
    const birthdate = birthdateInput.value;

    if (!birthdate) {
        alert("Please enter your date of birth.");
        return;
    }

    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDateObj.getMonth();
    let ageDays = currentDate.getDate() - birthDateObj.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths = 12 + ageMonths;
        if (ageDays < 0) {
            const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
            ageDays = lastMonthDate.getDate() + ageDays;
            ageMonths--;
        }
    }

    ageDisplay.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;

    let nextBirthday = new Date(currentDate.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeToBirthday = nextBirthday.getTime() - currentDate.getTime();
    const daysToBirthday = Math.ceil(timeToBirthday / (1000 * 60 * 60 * 24));

    nextBirthdayDisplay.textContent = `Your next birthday is in ${daysToBirthday} days.`;
});