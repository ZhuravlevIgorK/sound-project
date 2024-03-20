'use client' 
import styles from '../Footer/footer.module.scss';
import TelegramBot from '../TelegramBot/TelegramBot';


export default function Footer() {

    return (
       
        <div className={styles.footer}> 
            
            <div>
                Design by IZY  © Все права защищены: 2022 - 2024 год.
            </div>        
            <div>
                По вопросам проектирования звоните: 8-917-552-55-23
            </div>                  
                                                        
            <div>                
                {/* <button style={{width:'400px', borderRadius:'10px', marginLeft:'15px'}}> форма обратной связи </button>                             */}
                <TelegramBot/>
            </div>
            
        </div>        
    )     
}