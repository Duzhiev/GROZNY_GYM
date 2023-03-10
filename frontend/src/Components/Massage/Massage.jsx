import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMassage } from "../../features/massageSlice";
import { postForm } from "../../features/formSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";
import styles from "./Massage.module.scss";
import photo from "../../images/massage2.jpg";
import photo2 from "../../images/massage.jpg";
import { separator } from "../helpers/separator";

const Massage = () => {
  const massage = useSelector((state) => state.massage.massage);
  const loading = useSelector((state) => state.massage.loading);
  const error = useSelector((state) => state.massage.error);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setphone] = useState("+7");
  const [email, setEmail] = useState("@mail.ru");
  const [forWhichMassage, setforWhichMassage] = useState("");

  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetPhone = (e) => {
    setphone(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetMassaje = (e) => {
    setforWhichMassage(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(postForm({ name, phone, email, forWhichMassage }));
  };

  useEffect(() => {
    dispatch(getMassage());
  }, [dispatch]);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (loading) {
    return <div className={styles.loader}>Loading</div>;
  }

  return (
    <>
      <Fade left cascade>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.p1}>
              Мало кто знает, что массаж очень полезен в комплексе с физическими
              нагрузками и просто необходим тем, кто занимается спортом и
              посещает спортзал.
            </div>
            <div>
              Вместе с командой массажистов Grozny Gym мы решили рассказать, как
              массаж влияет на тело в зависимости от вида спортивных нагрузок,
              какие виды массажа полезны для тех, кто посещает тренажерный зал,
              и как часто нужно посещать сеансы массажа в сочетании со спортом.
            </div>
            <div>
              Спорт и массаж вместе отлично работают на оздоровление организма в
              целом. Они помогают избавиться от стресса, улучшают работу
              сердечно-сосудистой системы, активизируют и приводят в норму
              работу органов и полезны для профилактики неврозов, бессонницы,
              инфарктов и инсультов.
            </div>
          </div>
          <div className={styles.image}>
            <img src={photo} alt="massage" />
            <div className={styles.content}>
              <h3>ПОЛЬЗА МАССАЖА В КОМПЛЕКСЕ С ТРЕНИРОВКАМИ</h3>
            </div>
          </div>
        </div>
        </Fade>
        <Fade right cascade>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={photo2} alt="massage" />
            <div className={styles.content}>
              <h3>
                Какую пользу приносит массаж тела после физических нагрузок?
              </h3>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <ul>
                <li>
                  Помогает восстановить работу мышц и снять усталость и
                  напряжение после тренировки.
                </li>
                <li>
                  Усиливает метаболические процессы и питание тканей, улучшает
                  обмен веществ в клетках. Как результат — запускает процесс
                  похудения.
                </li>
                <li>
                  Способствует восстановлению и омоложению организма, улучшает
                  эмоциональное и физическое состояние, запускает полноценную
                  детоксикацию и очищение организма.
                </li>
                <li>Улучшает дыхание, метаболизм и питание мышечных тканей.</li>
                <li>Улучшает работу нервной системы.</li>
                <li>
                  Дает ощущение легкости в теле за счет вывода лишней жидкости и
                  молочной кислоты.
                </li>
                <li>
                  Улучшает настроение и снимает ощущение усталости после
                  тренировки.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: "40px", marginTop: "2%" }}>
          Наши услуги
        </div>
        <div className={styles.wrapper2}>
          {massage.map((item) => {
            return (
              <div className={styles.cards} key={item._id}>
                <div className={styles.photo}>
                  <img
                    src={`assets/images/massage/${item.image}`}
                    alt="massage"
                  />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <hr />
                </div>
                <div className={styles.textContainer}>
                  <h6>{item.description}</h6>
                </div>
                <div>
                  <p>{separator(item.price)} ₽</p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 style={{ textAlign: "center", marginBottom: "3%" }}>
          Как записаться на массаж
        </h1>
        </Fade>
        <Fade bottom cascade>
        <div className={styles.wrapper3}>
          <div className={styles.form}>
            <Typography component="h1" variant="h5">
              Заполните форму
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleForm}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Имя"
                name="name"
                autoComplete="name"
                onChange={handleSetName}
                value={name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Электронная почта"
                type="mail"
                id="mail"
                autoComplete="mail"
                onChange={handleSetEmail}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="tel"
                label="Телефон"
                type="tel"
                id="tel"
                autoComplete="tel"
                onChange={handleSetPhone}
                value={phone}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="massage"
                label="На какой массаж?"
                type="text"
                id="massage"
                autoComplete="massage"
                onChange={handleSetMassaje}
                value={forWhichMassage}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Отправить
              </Button>
            </Box>
          </div>
          <Typography component="h1" variant="h5">
            ИЛИ
          </Typography>
          <div className={styles.call}>
            <Typography component="h1" variant="h5">
              <div>Запишитесь по телефону</div>
            </Typography>
            <div>
              Позвоните в отдел продаж по телефону
              <a href="tel:+7937 935 99 92"> +7(937) 935 99 92</a>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default React.memo(Massage);
