import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import RemoveAgree from './RemoveAgree';

interface Props {
  agree: AgreeType | undefined;
  onBack: () => void;
  modal: boolean;
  onModalOpen: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

function ReadAgree({
  agree,
  onBack,
  modal,
  onModalOpen,
  onConfirm,
  onCancel,
}: Props) {
  return (
    <Container>
      {agree && (
        <Contents>
          <h1>개인정보 제공 동의서</h1>

          <TextBox>
            <p className="lead">
              국군복지단 국방컨벤션은 일용직 근로자 임금지급을 위해 아래와 같은
              개인정보를 수집합니다.
            </p>

            <ol>
              <li>개인정보 수집 이용ㆍ목적</li>
              <p>
                - 근로자의 임금지급을 위한 본인 확인 및 타인계좌로 입금 방지
              </p>

              <li>개인정보 수집항목</li>
              <p>
                - 수집항목 : 성명, 주민등록번호, 성별, 주소, 연락처, 계좌번호
                <br />{' '}
                <small>
                  * 근로기준법 제48조(임금대장)에 의거 고유식별정보인
                  주민등록번호를 적어야 한다.
                </small>
              </p>

              <li>개인정보의 보유 및 이용기간 (1년)</li>
              <p>- 임금지급시 근로자 확인을 위해서만 보유, 이용, 보관됩니다.</p>

              <li>동의 거부 및 동의 거부시 불이익 내용</li>
              <p>
                - 개인정보 수집 동의를 거부할 수 있습니다.
                <br />
                &nbsp;&nbsp;&nbsp;다만, 동의하지 않을 경우 임금지급에 제한을
                받을 수 있습니다.
                <small>
                  * 임금지급에 필요한 개인정보는 용도 이외의 다른 목적으로
                  사용하지 않습니다.
                </small>
              </p>
            </ol>
          </TextBox>

          <AgreeBox>
            <h2>개인정보 수집 및 이용에 동의하십니까?</h2>

            <p>동의함 ( O ), 동의하지 않음 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
            <p>
              {new Date(agree.created_at).getFullYear()}년{' '}
              {new Date(agree.created_at).getMonth() + 1}월{' '}
              {new Date(agree.created_at).getDay()}일
            </p>
            <p className="name">
              작성자 : <span>{agree.name}</span>
              <img src={agree.sign} />
            </p>
          </AgreeBox>
        </Contents>
      )}

      <ButtonsBox>
        <Button restore onClick={onBack}>
          뒤로
        </Button>
        <Button remove onClick={onModalOpen}>
          삭제
        </Button>
      </ButtonsBox>

      <RemoveAgree visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media print {
    button {
      display: none;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210mm;
  min-height: 277mm;
  padding: 20mm;
  margin: 10mm auto;
  background: white;

  h1 {
    font-size: 2.15rem;
    text-decoration: underline;
  }
`;

const TextBox = styled.div`
  word-break: keep-all;

  .lead {
    font-size: 1.215rem;
    line-height: 1.6;
  }

  ol {
    padding-left: 16px;
    font-size: 1.12rem;

    li {
      font-size: 1.3rem;
      color: #2974c0;
    }

    p {
      margin: 0.4rem 0 1rem 0;
      padding-bottom: 0.4rem;
    }
  }
`;

const AgreeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.12rem;
    text-align: right;

    &.name {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 1.52rem;
      height: 120px;

      span {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.82rem;
      }

      img {
        width: 120px;
        height: 80px;
      }
    }
  }
`;

const ButtonsBox = styled.div`
  display: flex;
`;

export default ReadAgree;
