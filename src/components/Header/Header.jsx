import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';

export default function Header() {

      return (
            
                  <div className={styles.header}>
                        <h1 className={styles.HeaderSoundProject}>                              
                              
                              <div className={styles.headerSound}>
                                    <div>S</div>
                                    <div>O</div>
                                    <div>U</div>
                                    <div>N</div>
                                    <div>D</div>                                    
                              </div>    

                              <div className={styles.headerSound}>
                                    <div>P</div>
                                    <div>R</div>
                                    <div>O</div>
                                    <div>J</div>
                                    <div>E</div>
                                    <div>C</div>
                                    <div>T</div>
                              </div>

                                                                                     
                              
                                              
                        </h1>
                        <div className={styles.headerLine}></div>
                        
                        <div className={styles.weMakeBest}>                        
                              {/* <div className={styles.textStyle}>Мы</div> */}
                              <div className={styles.textStyle}>СОЗДАЕМ</div>
                              <div className={styles.textStyle}>ЛУЧШИЕ</div>
                              <div className={styles.textStyle}>ЗВУКОВЫЕ</div>
                              <div className={styles.textStyle}>ПРОСТРАНСТВА</div>                            
                        </div>
                        <div className={styles.weMakeBest}>
                              <Navbar/>
                        </div>
                          
                  </div>
                                 
            
      ) 
    
}