let count = 0;

module.exports = {
    increment() {
        count++;
    },

    decrement() {
        count--;
    },

    getCount() {
        return count;
    }
};