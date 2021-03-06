import { GetStaticProps } from 'next';
import { FiCalendar, FiUser } from 'react-icons/fi'

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';
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
   <Header />
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query('', {
    fetch: ['blognext.title', 'blognext.content'],
    pageSize: 100
  });
  console.log(postsResponse);
  return {
    props: {

    }
  }

  // TODO
};
