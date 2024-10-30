import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, MenuItem, Button, InputAdornment, Dialog, DialogContent, DialogActions } from '@mui/material'; // MUI компоненты
import img8 from '../../assets/8.png';
import cls from './Requests.module.scss'; // Стили

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  details: string;
  file: FileList | null;
  captcha: string;
}

const Requests: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<IFormInput>();
  const [open, setOpen] = useState(false); // Состояние для модального окна

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset(); // Сброс формы после отправки
    setOpen(false); // Закрыть окно после отправки
  };

  const handleClickOpen = () => {
    setOpen(true); // Открыть модальное окно при нажатии кнопки
  };

  const handleClose = () => {
    setOpen(false); // Закрыть модальное окно при нажатии на "Отмена"
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className={cls.request}>
        <img className={cls.img} src={img8} alt="Надежная транспортировка грузов" />
        <h1 className='text-xl'>Мы готовы ответить на ваши вопросы</h1>
        {/* Кнопка для открытия модального окна */}
        <button className={cls.btn} onClick={handleClickOpen}>
          оставить запросы
        </button>

        {/* Модальное окно с формой */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent>
            <h1 style={{ textAlign: 'center' }}>ОСТАВИТЬ ЗАПРОС</h1>
            <p style={{ textAlign: 'center' }}>
              Заполните поля формы и отправьте нам запрос. Мы свяжемся с вами в ближайшее время.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '20px' }}>
              {/* Поле для имени */}
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="*Ваше имя"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />

              {/* Поле для телефона */}
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="*Телефон"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+998</InputAdornment>,
                    }}
                    placeholder="(___) ___-____"
                  />
                )}
              />

              {/* Поле для e-mail */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />

              {/* Выпадающий список для выбора услуги */}
              <Controller
                name="service"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="*Выберите услугу"
                    variant="outlined"
                    fullWidth
                    required
                  >
                    <MenuItem value="Service 1">Услуга доставки  для физических лиц </MenuItem>
                    <MenuItem value="Service 2">Услуга доставки  для юридических лиц </MenuItem>
                    <MenuItem value="Service 3">Услуга представителя в Китае (закупки)</MenuItem>
                  </TextField>
                )}
              />

              {/* Поле для дополнительной информации */}
              <Controller
                name="details"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="*Дополнительная информация"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                )}
              />

              {/* Поле для загрузки файлов */}
              <Controller
                name="file"
                control={control}
                defaultValue={undefined} // Используем undefined для корректной работы
                render={({ field }) => (
                  <div>
                    <label htmlFor="file-upload" className="file-upload-label">
                      Прикрепить фото или файл
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      onChange={(e) => field.onChange(e.target.files)}
                      style={{ display: 'block', marginTop: '10px' }}
                    />
                  </div>
                )}
              />

              {/* Капча */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>35404</span> {/* Это статическая капча */}
                <Controller
                  name="captcha"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Введите 5 цифр"
                      variant="outlined"
                      required
                      style={{ width: '150px' }}
                    />
                  )}
                />
                <Button variant="contained" onClick={() => alert("Капча обновлена")} style={{ height: '56px', backgroundColor: '#fdd137' }}>
                  Обновить
                </Button>
              </div>
            </form>
          </DialogContent>

          {/* Кнопки действий в модальном окне */}
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Отмена
            </Button>
            <Button type="submit" form="form" color="primary">
              Отправить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Requests;