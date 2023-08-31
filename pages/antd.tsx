import Layout from '@/components/Layout';
import { For } from 'million/react';

const ArrayItem = [
  {
    id: 0,
    title: 'item0',
  },
  {
    id: 1,
    title: 'item1',
  },
  {
    id: 2,
    title: 'item2',
  },
];

function AntdTest() {
  return (
    <Layout>
      <div>
        <ul>
          <For each={ArrayItem}>{item => <li>{item.title}</li>}</For>
        </ul>
      </div>
    </Layout>
  );
}

export default AntdTest;
