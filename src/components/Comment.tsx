import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((liked) => ++liked);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.6435-9/123170292_1887518034723647_4776475170799360305_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dy-CTxNOQXkAX_XYMDk&_nc_ht=scontent.fcpq14-1.fna&oh=00_AT8ksA5REHOfGQ6vvwuu6MPaZ3fSEuZDsF6NbcrpypXggA&oe=634F9E6B"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dharuan Luigi</strong>

              <time
                title="21 de Setembro às 13h30min"
                dateTime="2022-09-11 14:31:20"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
