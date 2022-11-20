import { MyPost } from '../interfaces/MyPost'
import styles from '../styles/Post.module.css'

export default function Post() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.title}>hello</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          distinctio vero quos magni?
        </div>
      </div>
    </div>
  )
}
