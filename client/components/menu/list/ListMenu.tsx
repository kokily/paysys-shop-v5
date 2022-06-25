import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import MenuItem from './MenuItem';

interface Props {
  menu: ItemType[];
  onBack: () => void;
  onDetailMenu: (id: string) => void;
}

function ListMenu({ menu, onBack, onDetailMenu }: Props) {
  return (
    <Container>
      {menu && (
        <>
          <Title>
            <h2>{menu[0] && menu[0].divide}</h2>
            <Button cancel onClick={onBack}>
              뒤로
            </Button>
          </Title>

          <List>
            {menu.map((item) => (
              <MenuItem key={item.id} item={item} onDetailMenu={onDetailMenu} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const List = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export default ListMenu;
