export const getValueLocalStorage = <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;

    try {
        const value = localStorage.getItem(key);
        return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const setValueLocalStorage = <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error reading localStorage:', error);
    }
};

export const removeValueLocalStorage = (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
        if(key) {
            localStorage.removeItem(key);
        }
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
};
