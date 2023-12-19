'use client';
import { useState, useCallback, useMemo, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import debounce from 'debounce';
import Input from '../Input/Input';
import style from './style.module.scss';

const SearchBar = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');

  const debouncedRouterPush = useMemo(
    () =>
      debounce(({ name, birth }: { name: string; birth: string }) => {
        router.push(`?name=${name}&birth=${birth}`);
      }, 200),
    [router]
  );

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setName(value);
      debouncedRouterPush({ birth, name: value });
    },
    [setName, birth, debouncedRouterPush]
  );

  const handleBirthChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setBirth(value);
      debouncedRouterPush({ birth: value, name });
    },
    [setBirth, name, debouncedRouterPush]
  );

  return (
    <div className={style.container}>
      <Input
        type="text"
        placeholder="first name / last name"
        onChange={handleNameChange}
        value={name}
        testId={'SearchBar_nameInput'}
      />
      <Input
        type="date"
        placeholder="date of birth"
        onChange={handleBirthChange}
        value={birth}
        testId={'SearchBar_birthInput'}
      />
    </div>
  );
};

export default SearchBar;
