import styles from "./soundStudio.module.scss";
import Image from "next/image";

export default function contacts() {
  return (
    <div className={styles.soundStudio}>
      <div className={styles.soundPageIMG}>.</div>
      <div className={styles.soundPageText}>
        <h3> Cтудии звукозаписи </h3>

        <div>          
          Мы проектируем любые студии, исходя из Вашего бюджета и потребностей.
        </div>

        <div>
          <p>
            К сожалению, многие не видят принципиальной разницы между
            помещением со звукозаписывающим оборудованием (пускай даже
            профессиональным) и таким понятием, как «студия звукозаписи» Для
            настоящей студии приходится решать много проблем., начиная с выбора
            помещения под студию, заканчивая её дизайном и подбором оборудования.
          </p>
          <br />
          <p> 
            Выбор помещения для студии важен с точки зрения шумоизоляции,
            звукопоглощения и распространения звука. Например, кирпичные здания
            имеют преимущества перед железобетонными с точки зрения звукоизоляции.
            Размещение студии на более высоких этажах может иметь негативные
            моменты, связанные с дополнительными расходами, а лучшим решением
            будут подвальные и полуподвальные этажи.
          </p>
          <br />
          <br />
          <Image
            src="/ЗС1.webp"
            width={700}
            height={500}
            className={styles.imgMy1}
            alt={"foto"}
          />
          <br />
          <br />
          <p> 
            Геометрия помещения влияет на распространение звука, идеально
            если помещение имеет золотое сечение. Высота потолков в студии влияет
            на дыхание акустики, рекомендуемая минимальная высота - три метра. При
            выборе помещения нужно учитывать дополнительные факторы, совмещение со
            студией видеозаписи или актовым залом, наличие комнаты для отдыха
            музыкантов, инвентарной, операторской.
          </p>
          <br />
          <p>
            Приобретая наши услуги по проектированию студий, вы получаете
            профессионала, с которым можно обсудить любые вопросы, связанные с
            проектом, звуком, помещением, и совместно выбрать оборудование. Наше
            мнение будет гораздо более объективным, чем мнение продавца из
            магазина, так как продавец может быть заинтересован в продаже
            оборудования определенного производителя.
          </p>
          <br />
          <Image
            src="/ЗС4.webp"
            width={700}
            height={500}
            className={styles.imgMy1}
            alt={"foto"}
          />
          <p>
            Наш опыт бесценен и мы всегда заинтересованы в достижении лучщего
            конечного результата.
          </p>
          <p>
            Этим стоит воспользоваться!
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
