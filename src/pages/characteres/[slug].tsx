import { ListCharacteres } from '../../components/ListCharacteres';
import * as Styled from '../../components/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Characteres() {
  const router = useRouter();
  const [slug, setSlug] = useState<string | string[]>('');
  const [filter, setFilter] = useState<string | string[]>('');

  useEffect(() => {
    if (router.isReady) {
      setSlug(router.query.slug);
      setFilter(router.query.filter);
    }
  }, [router]);

  return (
    <Styled.CharacteresContainer>
      {slug && filter && <ListCharacteres string={slug} filter={filter} />}
    </Styled.CharacteresContainer>
  );
}
export default Characteres;
