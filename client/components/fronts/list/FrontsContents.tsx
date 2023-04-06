import React from 'react';
import useLocalStorage from 'use-local-storage';
import styled from 'styled-components';
import useMobile from '../../../libs/hooks/common/useMobile';

interface Props {
  bills: BillType[];
  onUserList: (user_id: string) => void;
  onHallList: (hall: string) => void;
  onDetailBill: (id: string) => void;
}

function FrontsContents({
  bills,
  onUserList,
  onHallList,
  onDetailBill,
}: Props) {
  const [, setScrollY] = useLocalStorage('bills_list', 0);
  const isMobile = useMobile();

  return (
    <Container>
      <thead>
        <tr>
          <Th>날짜</Th>
          {!isMobile && <Th>출신</Th>}
          <Th>행사명</Th>
          <Th>장소</Th>
          <Th>작성자</Th>
        </tr>
      </thead>
      <tbody>
        {bills === null || bills.length === 0 ? (
          <tr>
            <Td colSpan={4}>작성된 전표가 없습니다</Td>
          </tr>
        ) : (
          <>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <Td>{new Date(bill.created_at).toLocaleDateString()}</Td>
                {!isMobile && <Td>{bill.items[0].native}</Td>}
                <Td>
                  <strong
                    onClick={() => {
                      setScrollY(window.scrollY);
                      onDetailBill(bill.id);
                    }}
                  >
                    {bill.title.length > 20 ? (
                      <>{bill.title.slice(0, 20)}...</>
                    ) : (
                      <>{bill.title}</>
                    )}
                  </strong>
                </Td>
                <Td className="link" onClick={() => onHallList(bill.hall)}>
                  {bill.hall}
                </Td>
                <Td className="link" onClick={() => onUserList(bill.user_id)}>
                  {bill.username} 님
                </Td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
}

// Styles
const Container = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    overflow: hidden;
  }
`;

const Th = styled.th`
  min-width: 50px;
  background: #1098ad;
  color: white;
`;

const Td = styled.td`
  strong {
    color: #0b7285;
    transition: 0.3s;
    overflow: hidden;
    padding: 0.3rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: #1098ad;
      color: white;
    }
  }

  &.link {
    cursor: pointer;
    color: #3d4c4f;
    transition: 0.2s color;
    &:hover {
      color: #22b8cf;
    }
    &:active {
      transform: translateY(2px);
    }
  }
`;

export default FrontsContents;
