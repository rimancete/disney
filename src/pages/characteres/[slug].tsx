import { ListCharacteres } from '../../components/ListCharacteres';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Characteres() {
  const router = useRouter();
  const [slug, setSlug] = useState<string | string[]>('');

  useEffect(() => {
    if (router.isReady) {
      setSlug(router.query.slug);
    }
  }, [router]);

  return (
    <Styled.Container>
      {slug && <ListCharacteres string={slug} />}
    </Styled.Container>
  );
}
export default Characteres;
