import { PageProps } from '@/types';

import { data } from '../../dapps/page';
import Form from './form';

export async function generateStaticParams() {
  return data.map((el) => ({
    slug: el,
  }));
}

export async function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: {
      absolute: slug,
    },
  };
}
export default function ProviderPage() {
  return (
    <section className="container py-10">
      <Form />
    </section>
  );
}
