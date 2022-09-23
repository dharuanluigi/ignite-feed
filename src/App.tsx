import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.6435-9/123170292_1887518034723647_4776475170799360305_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dy-CTxNOQXkAX_XYMDk&_nc_ht=scontent.fcpq14-1.fna&oh=00_AT8ksA5REHOfGQ6vvwuu6MPaZ3fSEuZDsF6NbcrpypXggA&oe=634F9E6B",
      name: "Dharuan Luigi",
      role: "Backend Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem, ipsum dolor.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta.",
      },
      {
        type: "link",
        content: "lore.core/project",
      },
    ],
    publishedAt: new Date("2022-09-21 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta.",
      },
      {
        type: "link",
        content: "lore.core/project",
      },
    ],
    publishedAt: new Date("2022-09-01 22:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
