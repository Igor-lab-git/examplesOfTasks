const generateUniqueID = () =>
    `${crypto?.randomUUID() ?? Date.now()}_${Math.floor(Math.random() * 1000)}`;

export default generateUniqueID;

