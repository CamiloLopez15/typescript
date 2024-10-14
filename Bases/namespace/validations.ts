namespace Validations {
    export const validateText = (text: string): boolean => {
        return text.length > 3 ? true : false;
    };

    export const validateDate = (date: Date): boolean => {
        return isNaN(date.valueOf()) ? true : false;
    };
}

console.log(Validations.validateText("Camilo"));

