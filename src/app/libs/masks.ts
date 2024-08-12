export const maskCpfCNPJ = (text: string) => {
    if (!text) {
        return ""
    }
    if (text.replace(/\D/g, "").length <= 11) {
        return text
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    } else {
        return text
            .replace(/\D/g, "")
            .replace(/[.]/g, "")
            .replace(/[-]/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/([.]\d{3})(\d)/, "$1/$2")
            .replace(/([/]\d{4})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1")
    }
}

export const maskPhone = (text: string) => {
    return text
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{1})(\d{4})(\d)/, "$1 $2-$3")
        .replace(/(-\d{4})\d+?$/, "$1");
}

export function unmaskPhone(masked: string): string {
    return masked.replace(/\D/g, '');
}

export function unmaskCpfCNPJ(number: string): string {
    return number.replace(/\D/g, '');
}

export function maksNumber(number: string): string {
    return number.replace(/\D/g, '');
}