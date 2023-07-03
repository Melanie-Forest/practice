import Header from "./components/Header/Header"
import Main_screen from "./components/MainScreen/MainScreen"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css"
import Background from "./img/bgc.svg"

function App() {
  return (
    <div className={styles.Background}>
      
      <div className={styles.Main_screen}>
        
        <Header />

        <Main_screen />

      </div>

      

      <Main />

      <Footer />
    </div>
  );
}

export default App;
