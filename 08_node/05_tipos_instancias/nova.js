/**
 * Factory que retorna um noo objeto
 */
module.exports = () => {
    return {
        valor: 1,
        inc() {
            valor++;
        }
    };
};