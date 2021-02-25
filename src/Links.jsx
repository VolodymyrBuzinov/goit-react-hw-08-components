import {  
  NavLink
} from "react-router-dom";
import styles from './Links.module.css'
export default function Links() {
    return (<>
        <nav className={styles.nav}>            
          <ul>
            <li className={styles.items}>
              <NavLink exact to="/" className={styles.link} activeClassName={styles.linkFocused}>Home</NavLink>
            </li>
            <li className={styles.items}>
              <NavLink to="/contacts" className={styles.link} activeClassName={styles.linkFocused}>Phonebook</NavLink>
                </li>
                <li className={styles.items}>
              <NavLink to="register" className={styles.link} activeClassName={styles.linkFocused}>Registration</NavLink>
            </li>
            <li className={styles.items}>
              <NavLink to="/login" className={styles.link} activeClassName={styles.linkFocused}>Login</NavLink>
            </li>
          </ul>
        </nav>
        </>)
}

