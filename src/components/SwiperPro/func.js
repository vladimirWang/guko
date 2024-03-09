function chunkArray(array, chunkSize) {
    return array.reduce((acc, val, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(val);
        return acc;
    }, []);
}

export const arrFn = {
    chunkArray
}