interface IvalidateDeviceForm {
    typeId: string;
    brandId: string;
    nameDevice: string;
    priceDevice: number;
}

const validateDeviceForm  = (dataValue: IvalidateDeviceForm): string[] => {
    const errorMessages: string[] = [];

      if(!dataValue.typeId) {
        errorMessages.push(`Выберети тип девайса 🤔`);
        };

         if(!dataValue.brandId) {
            errorMessages.push(`Выберети бренд девайса 🤔`);
        };

        if(!dataValue.nameDevice || dataValue.nameDevice.trim().length === 0) {
            errorMessages.push(`Поле название девайса обязательно для заполнения 🤔`);
        };

        if(dataValue.priceDevice === undefined || dataValue.priceDevice === null || dataValue.priceDevice <= 0) {
            errorMessages.push(`Поле цена обязательно для заполнения 🤔`);
        };

        return errorMessages;
};

export default validateDeviceForm;