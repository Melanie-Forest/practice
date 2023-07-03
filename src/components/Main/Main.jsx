import React from 'react'
import styles from "./Main.module.css"
import ABOUT from "../../img/about__img.svg"
import IH from "../../img/icon-heading.svg"
import rec_1 from "../../img/rec-100.svg"
import rec_2 from "../../img/rec-75.svg"
import rec_3 from "../../img/rec-50.svg"
import rec_4 from "../../img/rec-last.svg"
import logo1 from "../../img/icon-1.svg"
import logo2 from "../../img/icon-2.svg"
import logo3 from "../../img/icon-3.svg"
import logo_p from "../../img/logo-p.svg"
import line from "../../img/timeline.svg"
import photo1 from "../../img/DmIv.svg"
import photo2 from "../../img/DmIv2.svg"
import photo3 from "../../img/DmIv3.svg"
import b_button from "../../img/Bl-button.svg"

const Main = () => {
  return (
    <>
      <main className={styles.Main}>

        <div className={styles.what_it_is}>

          <div className={styles.wts_card}>
            <img src={ABOUT} alt="picture" className={styles.wts_pic} />
          </div>

          <div className={styles.wts_card}>
            <div className={styles.text_head}>
              Чем мы занимаемся?
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur quia veniam temporibus nisi ipsum id itaque. Earum nesciunt impedit, ab ut error possimus iusto fugit quaerat ipsum illum corrupti deserunt quia cumque repudiandae quam nulla, hic fuga mollitia. Aliquid ipsam dolore ex eum provident praesentium adipisci molestias corrupti. Soluta similique cupiditate praesentium quasi odit, nostrum fugiat ad animi sit?
          </div>

        </div>



        <div className={styles.fast_starting}>
          <div className={styles.fs_head}>
            <img src={IH} alt="" className={styles.icon_heading} />
            <div className={styles.fs_text_head}>
              Быстрый старт
            </div>
          </div>

          <div className={styles.fs_text}>
            Больше 90% учеников прошли полный курс и смогли
            <br />собрать свой первый компьютер
          </div>

          <div className={styles.fs_table}>
            <div className={styles.fs_table1}>
              <div className={styles.fs_tab_item}>
                100%
              </div>
              <div className={styles.fs_tab_item}>
                75%
              </div>
              <div className={styles.fs_tab_item}>
                50%
              </div>
              <div className={styles.fs_tab_item}>
                Итог
              </div>
            </div>

            <div className={styles.fs_table2}>
              <div >
                <img src={rec_1} alt="" className={styles.fs_tab_item1}/>
              </div>
              <div >
                <img src={rec_2} alt="" className={styles.fs_tab_item2}/>
              </div>
              <div >
                <img src={rec_3} alt="" className={styles.fs_tab_item3}/>
              </div>
              <div >
                <img src={rec_4} alt="" className={styles.fs_tab_item4}/>
              </div>
            </div>

            <div className={styles.fs_table3}>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus qui molestiae deserunt provident fugit vel veritatis voluptate delectus. Vero, deserunt.
              </div>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus corporis aperiam. Recusandae rem minima distinctio ab quidem atque facilis?
              </div>
              <di className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, corporis quas amet non aperiam temporibus pariatur necessitatibus fuga itaque quos!
              </di>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A velit impedit beatae est quibusdam ab odio repellat aperiam similique laudantium!
              </div>
            </div>
          </div>
        </div>



        <div className={styles.skills}>

          <div className={styles.sk_heading}>
            Получите профессию прямо сейчас
          </div>

          <div className={styles.sk_cardbox}>
            <div className={styles.sk_card}>
              <img src={logo1} alt="/" className={styles.sk_card_logo} />
              <div className={styles.sk_card_head}>
                Только практические
                <br />навыки в работе
              </div>
              <div className={styles.sk_card_text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias fugiat, rerum impedit iste optio itaque animi nulla pariatur doloremque!
              </div>
            </div>
            <div className={styles.sk_card}>
              <img src={logo2} alt="/" className={styles.sk_card_logo} />
              <div className={styles.sk_card_head}>
                Только практические
                <br />навыки в работе
              </div>
              <div className={styles.sk_card_text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias fugiat, rerum impedit iste optio itaque animi nulla pariatur doloremque!
              </div>
            </div>
            <div className={styles.sk_card}>
              <img src={logo3} alt="/" className={styles.sk_card_logo} />
              <div className={styles.sk_card_head}>
                Только практические
                <br />навыки в работе
              </div>
              <div className={styles.sk_card_text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias fugiat, rerum impedit iste optio itaque animi nulla pariatur doloremque!
              </div>
            </div>
          </div>

        </div>



        <div className={styles.partners}>
          <div className={styles.partners_head}>
            <img src={IH} alt="" className={styles.icon_head} />
            <div className={styles.p_text}>
              Партнеры - топовый бренды
            </div>
          </div>
          <div className={styles.partners_table}>

            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>

            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>
            <div className={styles.partners_table_card}>
              <img src={logo_p} alt="" className={styles.partners_logo} />
            </div>

          </div>
        </div>



        <div className={styles.program}> 
          <img src={IH} alt="" className={styles.pro_icon} />

          <div className={styles.pro_heading}>
            Программа обучения
          </div>

          <div className={styles.pro_text}>
            Больше 90% учеников прошли полный курс и смогли 
            <br />собрать свой первый компьютер
          </div>

          <div className={styles.pro_gram}>

            <div className={styles.pro_gram_col1}>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>

              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>
                
              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>
                
              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>
              
            </div>

            <div className={styles.pro_gram_timeline}>
              <img src={line} alt="" className={styles.timeline} />
            </div>

            <div className={styles.pro_gram_col2}>

              <div className={styles.pro_card_space}>
                
              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>
                
              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>
                
              </div>

              <div className={styles.pro_card}>
                <div className={styles.pro_card_text1}>
                  Неделя X
                </div>
                <div className={styles.pro_card_text2}>
                  Красивая часть курса,
                  <br />которая помогает в успехе
                </div>
              </div>

              <div className={styles.pro_card_space}>
                
              </div>

            </div>
            
          </div>

        </div>



        <div className={styles.mentors}>

          <div className={styles.mentors_head}>
            <img src={IH} alt="" className={styles.icon_men} />
            <div className={styles.men_heading}>
              Ваши преподаватели
            </div>
          </div>

          <div className={styles.mentors_cards}>

            <div className={styles.mentors_card}>
              <img src={photo1} alt="" className={styles.mentor_photo} />
              <div className={styles.mentor_name}>
                Дмитрий Иванов
              </div>
              <div className={styles.mentor_profession}>
                Специалист по видеокартам
              </div>
              <a href="/" className={styles.mentor_biography_button}>
                <img src={b_button} alt="" className={styles.biography_button} />
              </a>
            </div>

            <div className={styles.mentors_card}>
              <img src={photo2} alt="" className={styles.mentor_photo} />
              <div className={styles.mentor_name}>
                Дмитрий Иванов
              </div>
              <div className={styles.mentor_profession}>
                Специалист по видеокартам
              </div>
              <a href="/" className={styles.mentor_biography_button}>
                <img src={b_button} alt="" className={styles.biography_button} />
              </a>
            </div>

            <div className={styles.mentors_card}>
              <img src={photo3} alt="" className={styles.mentor_photo} />
              <div className={styles.mentor_name}>
                Дмитрий Иванов
              </div>
              <div className={styles.mentor_profession}>
                Специалист по видеокартам
              </div>
              <a href="/" className={styles.mentor_biography_button}>
                <img src={b_button} alt="" className={styles.biography_button} />
              </a>
            </div>

          </div>

        </div>

      </main>
    </>
  )
}

export default Main