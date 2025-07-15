import { lazy } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInput from 'react-phone-input-2';
import file from '@/assets/icons/file.svg';
import classes from './Calculate.module.scss';


const Title = lazy(() => import('@components/Title/Title'));
const Button = lazy(() => import('@components/Button/Button'));

const schema = z.object({
  phone: z.string().min(5, 'Введите номер'),
  email: z.string().email('Неверный email'),
  message: z.string().min(1, 'Введите сообщение'),
  file: z.any().optional(),
  check: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const phoneStyles = {
  width: '100%',
};

const Calculate = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const file = (data.file as FileList | undefined)?.[0];
    console.log({ ...data, file });
  };
  return (
    <section id="calculate" className={`container ${classes.calculate}`}>
      <div className={classes.wrapper}>
        <div className={classes.texts}>
          <Title className={classes.title}>рассчитайте доставку</Title>
          <p className={classes.descipription}>{`Не тратьте время на расчёты — мы всё сделаем \nи вернёмся с ответом`}</p>
        </div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.contacts}>
            <label className={classes.label}>
              <span>Номер телефона</span>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    country={'ru'}
                    value={field.value}
                    inputStyle={phoneStyles}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
            </label>

            <label className={classes.label}>
              <span>Ваш Email</span>
              <input
                className={classes.email}
                type="email"
                placeholder="mail@mail.com"
                {...register('email')}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </label>
          </div>

          <label className={classes.label}>
            <span>Ваше сообщение</span>
            <textarea
              className={classes.message}
              {...register('message')}
            />
            {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
          </label>

          <div className={classes.fieldsBlock}>
            <label>
              <input type="file" {...register('file')} multiple={false} hidden />
              <span className={classes.fileBtn}>
                <img src={file} alt="" /> Прикрепить файл
              </span>
            </label>

            <label className={classes.approving}>
              <input type="checkbox" required {...register('check')} /> Я соглашаюсь с политикой обработки данных
            </label>
          </div>

          <Button isLink={false} type='submit' className={classes.button}>ОСТАВИТЬ ЗАЯВКУ</Button>
        </form>
      </div>
    </section>
  )
}

export default Calculate;
