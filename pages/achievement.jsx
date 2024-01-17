import React from 'react'
import styles from '../styles/Achivements.module.css';


const achievement = () => {
  return (
    <div >
      <h1>Achievements</h1>
       <br />
      <h3>Technical</h3>
      <br />
        <div className={styles.certificates}>
            <img src="\certificates\IMG_20240116_211608_730@1437045923.jpg" alt="" width={700} />
            <img src="\certificates\IMG_20240116_211745_616@-957784220.jpg" alt="" width={700} />

            <img src="\certificates\Screenshot_20240117-205644.jpg" alt="" width={700} />
            <img src="\certificates\Capture.JPG" alt="" width={700} />

            <img src="\certificates\IMG_20240116_211759_652@316641535.jpg" alt="" width={700} />
            
        </div> 
        <br />
        <h3>Cultural</h3>
        <br />
        <div className={styles.certificates}>
            <img src="\certificates\IMG_20240116_211623_878@-1794202207.jpg" alt="" width={700} />
           
            <img src="\certificates\IMG_20240116_211719_095@189927932.jpg" alt="" width={700} />
            <img src="\certificates\IMG_20240116_211735_705@96680294.jpg" alt="" width={700} />
            
        </div> 
        <br />
        <h3>Sports</h3>
        <br />
        <div className={styles.certificates}>
            <img src="\certificates\IMG_20240116_211657_651@1432611003.jpg" alt="" width={700} />
           
            <img src="\certificates\IMG_20240116_213359_101@-1113942568.jpg" alt="" width={700} />
            
        </div> 

    </div>
  )
}

export default achievement