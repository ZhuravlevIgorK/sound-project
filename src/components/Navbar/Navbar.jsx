import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navBar}>         

            <div className={styles.navigationHref}>
                <Link href='/'>
                    <button className={styles.button}>О нас</button>
                </Link> 
                <Link href='/videoStudio' >
                    <button className={styles.button}>Видео студии</button>
                </Link>   
                <Link href='/soundStudio' >
                    <button className={styles.button}>Студии звукозаписи</button>
                </Link>  
                <Link href='/assemblyHall'>
                <button className={styles.button}>Актовые залы</button>
                </Link>  
                <Link href='/contacts'>
                    <button className={styles.button}>Контакты</button>
                </Link> 
                     
   
            </div>              
        </nav>
    )
}