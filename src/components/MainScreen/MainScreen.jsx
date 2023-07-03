import React from 'react'
import styles from "./MainScreen.module.css"
import button1 from "../../img/main-screen__button--active.svg"

const Main = () => {
  return (
    <>
      <main className={styles.MainScreen}>

        <div className={styles.Main_page}>
          <div className={styles.Main_page_box}>

            <h1 className={styles.Main_page_h}>
              Первый курс по компьютерной сборке
            </h1>

            <div className={styles.Main_page_timer}>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  дней
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  часов
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  минут
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  секунд
                </text>
              </div>

            </div>

          </div>
        </div>



        <div className={styles.Main_line}>

          <div className={styles.Main_line_button}>
            <a href='/' >
              <img src={button1} alt="" className={styles.line_b}/>
            </a>
          </div>

          <div className={styles.line_table}>
            <div className={styles.Main_line_table1}>

              <div className={styles.table_item}>
                Учеников всего:
              </div>

              <div className={styles.center_line_bar}>

              </div>

              <div className={styles.table_item}>
                Успешно закончили курс:
              </div>

            </div>

            <div className={styles.Main_line_table2}>

              <div className={styles.table_item}>
                200
              </div>

              <div className={styles.center_line_bar}>

              </div>

              <div className={styles.table_item}>
                190
              </div>

            </div>
          </div>

          <div className={styles.line_bar}>

            <div className={styles.line_bar_box}>
              <div className={styles.bar_box1}>
                Заработано учениками:
              </div>
              <div className={styles.bar_box2}>
                400 000p
              </div>
            </div>

            <div className={styles.center_line_bar}>
              <div className={styles.pg_neeed}></div>
              <div className={styles.pg_compleete}></div>
            </div>

            <div className={styles.line_bar_box2}>
              <div className={styles.bar_box3}>
                0
              </div>
              <div className={styles.bar_box3}>
                1 000 000 
              </div>
            </div>


          </div>

        </div>



      </main>
    </>
  )
}

export default Main