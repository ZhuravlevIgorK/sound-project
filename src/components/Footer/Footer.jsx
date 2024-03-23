'use client' 
import styles from './footer.module.scss';
import TelegramBot from '../TelegramBot/TelegramBot';


export default function Footer() {

    return (
       
        <div className={styles.footer}> 
            
            <div className={styles.mediaStile}>                
                Design by IZY  © Все права защищены: 2022 - {(new Date()).getFullYear()} год.
            </div>        
            <div className={styles.mediaStile}>
                По вопросам проектирования звоните: <a href='tel:89175525523'>8-917-552-55-23 </a>
            </div> 
            <div className={styles.mediaStile3}>
                Позвонить нам: <a href='tel:89175525523'>8-917-552-55-23 </a>
            </div>                  
                                                        
            <div> 
                <TelegramBot/>
            </div>
            
        </div>        
    )     
}