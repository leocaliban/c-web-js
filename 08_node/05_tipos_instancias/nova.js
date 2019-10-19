/**
 * Factory que retorna um novo objeto com uma função factory
 */
module.exports = () => {
    return {
        valor: 1,
        inc() {
            valor++;
        }
    };
};