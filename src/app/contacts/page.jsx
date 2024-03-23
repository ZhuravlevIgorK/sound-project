import styles from './Contact.module.scss';


export default function contacts() {
    return (
        <div className={styles.pageContact}>  
            <div className={styles.background}></div> 
            <h1>КОНТАКТЫ</h1>

            <div className={styles.mapsAndTel}>
                <div className={styles.contacts}>
                    <div className={styles.contactMy}>Наш офис:</div>
                    <div  className={styles.contactText}>                       
                        г.Москва,
                        <br/>Петровско-Разумовский
                        <br/> проезд, 29с5
                        <br/>tel +7 (917) 552-55-23
                        <br/>fax +7 (499)849-71-21   
                    </div>             
                </div>
                <div>
                    <h3>Мы на карте</h3>
                    <div className={styles.map1}>  
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac5248e20829ed1596d4132032176c92edcef94c844e6972ec1a9a20c43a7fdb&amp;source=constructor" width="500" height="400" style={{borderRadius: '15px'}} frameborder="0"></iframe>                                
                    </div>
                </div>
            </div> 
        </div>
    )
}