import React from 'react'
import styles from "./SkillsStyles.module.css"
import checkMarkIconLight from "../../assets/checkmark-light.svg"
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList"
// import skillIconL from "../../assets/checkmark-light.svg"
// import skillIconD from "../../assets/checkmark-dark.svg"
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="REACT" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="BOOTSTRAP" />
            <SkillList src={checkMarkIcon} skill="TAILWIND CSS" />
           
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="NODE"   />
            <SkillList src={checkMarkIcon} skill="JAVASCRIPTS" />
            <SkillList src={checkMarkIcon} skill="FRAMER MOTION" />
            <SkillList src={checkMarkIcon} skill="GIT" />
            
           
        </div>
        <hr/>
            
    </section>
  )
}

export default Skills