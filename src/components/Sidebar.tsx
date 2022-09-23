import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1508448968-9065faf3ccdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.6435-9/123170292_1887518034723647_4776475170799360305_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dy-CTxNOQXkAX_XYMDk&_nc_ht=scontent.fcpq14-1.fna&oh=00_AT8ksA5REHOfGQ6vvwuu6MPaZ3fSEuZDsF6NbcrpypXggA&oe=634F9E6B" />

        <strong>Dharuan Luigi</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
