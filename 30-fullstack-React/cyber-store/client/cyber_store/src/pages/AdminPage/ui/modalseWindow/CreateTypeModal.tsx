import React, {type JSX, useState} from "react";
import style from "../AdminPage.module.scss";
import {
    useCreateBrandDeviceMutation,
    useCreateTypeDeviceMutation
} from "../../../../app/store/redusers/cyberStoreApi.ts";
import {NotificationModal} from "../../../../shared/ui";
import {CloseButton} from "../../../../shared/ui/CloseButton";

interface ICreateTypeModal {
    visibleType: boolean;
    typeModal: "type" | "brand";
    closeModalType: () => void;
};

const CreateTypeModal = ({visibleType, closeModalType, typeModal}: ICreateTypeModal): JSX.Element => {
    const [valueForm, setValueForm] = useState<string>("");
    const [iconFile, setIconFile] = useState<File | null>(null);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [messageModal, setMessageModal] = useState<string>("");
    const [typeMessageModal, setTypeMessageModal] = useState<"success" | "error">("success");

    const [createType, { isLoading: createTypeLoad }] = useCreateTypeDeviceMutation();
    const [createBrand, { isLoading: createBrandLoad }] = useCreateBrandDeviceMutation();

    const isLoading = typeModal === "type" ? createTypeLoad : createBrandLoad;

    // console.log(createTypeLoad, createBrandLoad)

    const selectIconFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if(files && files.length > 0) {
        const file = files[0]
        if(file.type === "image/svg+xml") {
           setIconFile(file)
         } else {
          alert("Вы забыли выбрать файл иконку");
          e.target.files = null
         }
      }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

       const formData = new FormData();

        if(valueForm.trim().length === 0) {
            setIsOpenModal(true);
            setMessageModal("Поле не должно быть пустым");
            setTypeMessageModal("error");
            return;
        };

        if(typeModal === "type") {
          formData.append("name", valueForm);
          if(iconFile) {
            formData.append("icon", iconFile);
          }
            const message = await createType(formData).unwrap();
            setIsOpenModal(true);
            setMessageModal(`Тип девайса ${message.name} был успещно создан  :)`);
            setTypeMessageModal("success");
            setValueForm("");
            closeModalType();
        } else {
            const message = await createBrand({name: valueForm}).unwrap();
            setIsOpenModal(true);
            setMessageModal(`Бренд девайса ${message.name} был успещно создан  :)`);
            setTypeMessageModal("success");
            setValueForm("");
            closeModalType();
        }
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    if(isLoading) return <h3>Загрузка...</h3>;

  return (
      <>
        <NotificationModal
              isOpenModal={isOpenModal}
              messageModal={messageModal}
              typeMessageModal={typeMessageModal}
              handleCloseModal={handleCloseModal}/>
        <div className={`${style.overlay} ${!visibleType ? style.show : ""}`}>
          <div className={style.modal}>
            <div className={style.modal_inner_wrapper}>
                <CloseButton onClose={closeModalType}/>
              <h3 className={style.modal_title}>{typeModal === "type" ? "Добавть тип устройства" : "Добавть брэнд устройства"}</h3>
              <form className={style.modal_form} onSubmit={handleSubmit}>
                <input
                  className={style.modal_form_input}
                    value={valueForm}
                    onChange={(e) => setValueForm(e.target.value)}
                    type="text"
                    placeholder={typeModal === "type" ? "Добавть тип..." : "Добавть брэнд..."} />
                    {typeModal === "type" ? (
                      <label htmlFor="svg-file">
                        <span>Добавте иконку формата 'svg'</span>
                        <input 
                          accept=".svg, image/svg+xml"
                          id="svg-file" 
                          type="file" 
                          onChange={selectIconFile}/>
                      </label>
                    ) : ""}
                  <button className={style.modal_form_button} type="submit">Добавить</button>
              </form>
            </div>
          </div>
        </div>
      </>
  );
};

export default CreateTypeModal;
