import Button from '@/components/Button';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
};

function TestPage() {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <h1>TestPage</h1>
        <Button />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      test: 1,
    },
  };
};

export default TestPage;
