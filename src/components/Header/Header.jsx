import React from 'react'
import styles from "./Header.module.css"
import Logo from "../../img/logo.svg"
import User from "../../img/main-screen__button.svg"

const Header = () => {
  return (
    < >
      <header className={styles.Header}>

        <div className={styles.header_box}>
          <a href="/" >
            <img src={Logo} alt="logo" className={styles.header_link}/>
          </a>
        </div>

        <nav className={styles.nav_panel}>

          <ul className={styles.menu_list}>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Главная
              </a>
            </li>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Курсы
              </a>
            </li>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Расписание
              </a>
            </li>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Преподаватели
              </a>
            </li>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Рассылка
              </a>
            </li>

            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Контакты
              </a>
            </li>

          </ul>

        </nav>

        <div className={styles.header_user_button}>
          <a href="/" className={styles.user}>
            <img src={User} alt="lk" className={styles.user_button} />
          </a>
        </div>

      </header>
    </>
  )
}

export default Header