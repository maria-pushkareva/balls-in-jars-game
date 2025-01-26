class Utils {
    static isTrueOrUndefined(value: any) {
        return typeof value === 'undefined' || value === true;
    }
}

export default Utils;