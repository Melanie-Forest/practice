import React from 'react'
import styles from "./Footer.module.css"
import VK from "../../img/vk.svg"
import UT from "../../img/youtube.svg"
import IN from "../../img/instagram.svg"
import FB from "../../img/facebook.svg"

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>

        <div className={styles.footer_box}>

          <div className={styles.footer_item1}>
            Статьи каждую неделю
          </div>

          <div className={styles.footer_item2}>
            Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
          </div>



          {/* е**ся с формами  */}

          <div className={styles.footer_item3}>

            <form action="/" className={styles.footer_mail}>
              <input type="email" title="Email" className={styles.footer_form_mail} />
            </form>
            
            <form action="/" className={styles.footer_button}>
              <input type="button" className={styles.footer_form_button} />
            </form>
            
          </div>



          <div className={styles.footer_item4}>

            <div className={styles.footer_icon}>
              <a href="/" className={styles.footer_link}>
                <img src={VK} alt="vk" className={styles.footer_l} />
              </a>
            </div>

            <div className={styles.footer_icon}>
              <a href="/" className={styles.footer_link}>
                <img src={UT} alt="ut" className={styles.footer_l} />
              </a>
            </div>

            <div className={styles.footer_icon}>
              <a href="/" className={styles.footer_link}>
                <img src={IN} alt="in" className={styles.footer_l} />
              </a>
            </div>

            <div className={styles.footer_icon}>
              <a href="/" className={styles.footer_link}>
                <img src={FB} alt="fb" className={styles.footer_l} />
              </a>
            </div>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer