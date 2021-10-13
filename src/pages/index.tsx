import { GetStaticProps } from 'next';
import { FiCalendar, FiUser } from 'react-icons/fi'

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <header>
        <img src="/images/logo.svg" alt="logo"/>
      </header>
  <main className={styles.container}>
    <div className={styles.post} >
      <a href="#">
        <strong>Como utilizar Hooks</strong>
        <p>Pensando em sincronização em vez de ciclos de vida.
        Pensando em sincronização em vez de ciclos de vida.
        Pensando em sincronização em vez de ciclos de vida.
        </p>
        <div className={styles.footer}>
        <div> <FiCalendar size={20} color="#FFF" /> <p>15 Mar 2021</p></div>
          <div> <FiUser size={20} color="#FFF" /> <p>Joseph Oliveira</p></div>
        </div>
        </a>

        <a href="#">
        <strong>Como utilizar Hooks</strong>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div className={styles.footer}>
        <div> <FiCalendar size={20} color="#FFF" /> <p>15 Mar 2021</p></div>
          <div> <FiUser size={20} color="#FFF" /> <p>Joseph Oliveira</p></div>
        </div>
        </a>

        <a href="#">
        <strong>Como utilizar Hooks</strong>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div className={styles.footer}>
        <div> <FiCalendar size={20} color="#FFF" /> <p>15 Mar 2021</p></div>
          <div> <FiUser size={20} color="#FFF" /> <p>Joseph Oliveira</p></div>
        </div>
        </a>
        
        <a>
        <strong>Como utilizar Hooks</strong>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div className={styles.footer}>
        <div> <FiCalendar size={20} color="#FFF" /> <p>15 Mar 2021</p></div>
          <div> <FiUser size={20} color="#FFF" /> <p>Joseph Oliveira</p></div>
        </div>
        </a>
    </div>

      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
