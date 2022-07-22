import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { media, shadow } from '../../../styles';
import Logo from './Logo';
import Apeach from '../nav/Apeach';
import NavList from '../nav/NavList';
import { useMutation, useQueryClient } from 'react-query';
import { logoutAPI } from '../../../libs/api/auth';
import { useUserState } from '../../../libs/context/UserContext';

interface Props {
  user: MeType | null;
}

function Header({ user }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [link] = useState(router.pathname.substring(1));
  const [, setUser] = useUserState();
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { mutate: logout } = useMutation(logoutAPI, {
    onSuccess: () => {
      setUser(null);
      queryClient.invalidateQueries('user');
      toggleMenu();
      toast.success('로그아웃!');
      router.push('/');
    },
  });

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const onOutsideClick = useCallback((e: any) => {
    if (ref.current && !ref.current.contains(e.target as any)) {
      setMenu(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', onOutsideClick, true);

    return () => {
      window.removeEventListener('click', onOutsideClick, true);
    };
  }, [ref]);

  return (
    <Container>
      <Layout>
        <Content>
          <Logo link={link} />

          <Spacer />

          {user && (
            <>
              <div ref={ref}>
                <Apeach onClick={toggleMenu} />
              </div>

              <NavList
                isAdmin={user.admin}
                onClose={onOutsideClick}
                onLogout={() => logout()}
                visible={menu}
              />
            </>
          )}
        </Content>
      </Layout>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 20;
  ${shadow(1)}

  @media print {
    display: none;
  }
`;

const Layout = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const Content = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.large} {
    width: 992px;
  }
  ${media.medium} {
    width: 100%;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default Header;
