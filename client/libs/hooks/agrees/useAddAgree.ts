import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { addAgreeAPI } from '../../api/agrees';
import { useImageState } from '../../context/ImageContext';
import { dataURItoBlob } from '../../utils';
import { imageUploadAPI } from '../../api/sign';

function useAddAgree() {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useImageState();
  const addAgreeMutate = useMutation(addAgreeAPI);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onToggleAgree = () => {
    setIsAgree(!isAgree);
  };

  const onToggleModal = () => {
    setModal(!modal);
  };

  const onAddAgree = async () => {
    if (currentImg) {
      try {
        const file = dataURItoBlob(currentImg);
        const formData = new FormData();

        formData.append('file', file);

        const response = await imageUploadAPI(formData);

        if (!response) {
          toast.error('업로드 에러!');
          return;
        }

        const sign = `https://image.paysys.kr/${response.key}`;

        await addAgreeMutate.mutateAsync({ name, sign });
        await queryClient.clear();
        setCurrentImg('');
        setIsAgree(false);
        setModal(false);
        setName('');
        toast.success('정보제공 동의가 완료되었습니다');
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  return {
    name,
    onChangeName,
    isAgree,
    onToggleAgree,
    modal,
    onToggleModal,
    onAddAgree,
  };
}

export default useAddAgree;
