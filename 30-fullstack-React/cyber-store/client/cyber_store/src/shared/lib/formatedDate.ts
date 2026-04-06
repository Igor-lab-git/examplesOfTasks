const formatedDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const formatted = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3');
    return formatted;
};

export default formatedDate;