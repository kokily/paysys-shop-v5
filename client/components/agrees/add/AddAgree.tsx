import type { ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import AddAgreeInput from './AddAgreeInput';
import AgreeModal from './AgreeModal';

interface Props {
  name: string;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  isAgree: boolean;
  onToggleAgree: () => void;
  modal: boolean;
  onToggleModal: () => void;
  onAddAgree: () => void;
}

function AddAgree({
  name,
  onChangeName,
  isAgree,
  onToggleAgree,
  modal,
  onToggleModal,
  onAddAgree,
}: Props) {
  return (
    <Container>
      <h2>개인정보 제공 동의서</h2>

      <Contents>
        <p>
          국군복지단 국방컨벤션은 일용직 근로자 임금지급을 위해 아래와 같은
          개인정보를 수집합니다.
        </p>

        <ol>
          <li>개인정보 수집 이용∙목적</li>
          <p>근로자의 임금지급을 위한 본인확인 및 타인계좌로 입금 방지</p>

          <li>개인정보 수집항목</li>
          <p>
            수집항목 : 성명, 주민등록번호, 성별, 주소, 연락처, 계좌번호
            <br />
            <small>
              * 근로기준법 제48조(임금대장)에 의거 고유식별정보인 주민등록번호를
              적어야 합니다.
            </small>
          </p>

          <li>개인정보의 보유 및 이용기간 (1년)</li>
          <p>임금지급시 근로자 확인을 위해서만 보유, 이용, 보관됩니다.</p>

          <li>동의 거부 및 동의 거부시 불이익</li>
          <p>
            개인정보 수집 동의를 거부할 수 있습니다.
            <br />
            다만, 동의하지 않을 경우 임금지급에 제한을 받을 수 있습니다.
            <br />
            <small>
              * 임금지급에 필요한 개인정보는 용도 이외의 다른 목적으로 사용하지
              않습니다.
            </small>
          </p>
        </ol>
      </Contents>

      <AgreePane>
        <h3>개인정보 수집 및 이용에 동의하십니까?</h3>

        <span>
          <input
            type="checkbox"
            name="agree"
            checked={isAgree}
            onChange={onToggleAgree}
          />
          <label htmlFor="agree">동의함</label>
        </span>
      </AgreePane>

      <NamePane>
        <div className="date">{new Date().toLocaleDateString()}</div>
        <AddAgreeInput
          name="name"
          value={name}
          onChange={onChangeName}
          label="성 명"
        />
      </NamePane>

      <ButtonBox>
        {isAgree && name !== '' && (
          <Button submit onClick={() => onToggleModal()}>
            서명하기
          </Button>
        )}
      </ButtonBox>

      <AgreeModal
        visible={modal}
        title="정보제공 동의"
        onConfirm={onAddAgree}
        onCancel={onToggleModal}
      />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

const Contents = styled.div`
  width: 100%;
  background-color: #bdb0b0;

  padding: 0.5rem;
  border-radius: 8px;

  p {
    font-size: 1rem;
  }

  ol {
    padding-left: 16px;

    p {
      margin: 0.4rem 0 1rem 0;
    }
  }
`;

const AgreePane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-align: right;
  }
`;

const NamePane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0.5rem;
  margin-right: 1rem;

  .date {
    font-size: 1.215rem;
    margin-right: 1rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default AddAgree;
