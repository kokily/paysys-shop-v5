import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { addExpenseAPI, updateExpenseAPI } from '../../api/expense';
import { readWeddingAPI } from '../../api/weddings';

function useExpense() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const [inputs, setInputs] = useState({
    husband_name: '',
    bride_name: '',
    event_at: '',
    company_husband: '0',
    company_bride: '0',
    rooftop_husband: '0',
    rooftop_bride: '0',
    owner_woman_husband: '0',
    owner_woman_bride: '0',
    owner_man_husband: '0',
    owner_man_bride: '0',
    select_husband: '0',
    select_bride: '0',
    frame_husband: '0',
    frame_bride: '0',
    dress_husband: '0',
    dress_bride: '0',
    hairpin_husband: '0',
    hairpin_bride: '0',
    wig_husband: '0',
    wig_bride: '0',
    video_husband: '0',
    video_bride: '0',
    etc_husband: '0',
    etc_bride: '0',
    rental_husband: '0',
    rental_bride: '0',
    sword_husband: '0',
    sword_bride: '0',
    glove_husband: '0',
    glove_bride: '0',
    bouquet_husband: '0',
    bouquet_bride: '0',
    ceremony_husband: '0',
    ceremony_bride: '0',
    play_husband: '0',
    play_bride: '0',
    anthem_husband: '0',
    anthem_bride: '0',
    moderator_husband: '0',
    moderator_bride: '0',
    officiate_husband: '0',
    officiate_bride: '0',
    hanbok_pre_husband: '0',
    hanbok_pre_bride: '0',
    hanbok_post_husband: '0',
    hanbok_post_bride: '0',
    meals: 'privacy',
    meals_price: '',
    meals_num_husband: '',
    meals_num_bride: '',
    present: 'privacy',
    present_price: '',
    present_num_husband: '',
    present_num_bride: '',
    reserve: 'half',
    reserve_pay: '',
    prepayment_husband: '',
    prepayment_bride: '',
  });
  const {
    husband_name,
    bride_name,
    event_at,
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    play_husband,
    play_bride,
    anthem_husband,
    anthem_bride,
    moderator_husband,
    moderator_bride,
    officiate_husband,
    officiate_bride,
    hanbok_pre_husband,
    hanbok_pre_bride,
    hanbok_post_husband,
    hanbok_post_bride,
    meals,
    meals_price,
    meals_num_husband,
    meals_num_bride,
    present,
    present_price,
    present_num_husband,
    present_num_bride,
    reserve,
    reserve_pay,
    prepayment_husband,
    prepayment_bride,
  } = inputs;
  const [startDate, setStartDate] = useState(new Date());
  const { data: wedding } = useQuery(
    'expenseWedding',
    () => readWeddingAPI(id!),
    {
      enabled: true,
      onSuccess: (data) => {
        setInputs({
          husband_name: data.wedding?.husband_name || '',
          bride_name: data.wedding?.bride_name || '',
          event_at: data.wedding?.event_at || '',
          company_husband: data.company?.company_husband.toString() || '',
          company_bride: data.company?.company_bride.toString() || '',
          rooftop_husband: data.company?.rooftop_husband.toString() || '',
          rooftop_bride: data.company?.rooftop_bride.toString() || '',
          owner_woman_husband:
            data.company?.owner_woman_husband.toString() || '',
          owner_woman_bride: data.company?.owner_woman_bride.toString() || '',
          owner_man_husband: data.company?.owner_man_husband.toString() || '',
          owner_man_bride: data.company?.owner_man_bride.toString() || '',
          select_husband: data.company?.select_husband.toString() || '',
          select_bride: data.company?.select_bride.toString() || '',
          frame_husband: data.company?.frame_husband.toString() || '',
          frame_bride: data.company?.frame_bride.toString() || '',
          dress_husband: data.company?.dress_husband.toString() || '',
          dress_bride: data.company?.dress_bride.toString() || '',
          hairpin_husband: data.company?.hairpin_husband.toString() || '',
          hairpin_bride: data.company?.hairpin_bride.toString() || '',
          wig_husband: data.company?.wig_husband.toString() || '',
          wig_bride: data.company?.wig_bride.toString() || '',
          video_husband: data.company?.video_husband.toString() || '',
          video_bride: data.company?.video_bride.toString() || '',
          etc_husband: data.company?.etc_husband.toString() || '',
          etc_bride: data.company?.etc_bride.toString() || '',
          rental_husband: data.convention?.rental_husband.toString() || '',
          rental_bride: data.convention?.rental_bride.toString() || '',
          sword_husband: data.convention?.sword_husband.toString() || '',
          sword_bride: data.convention?.sword_bride.toString() || '',
          glove_husband: data.convention?.glove_husband.toString() || '',
          glove_bride: data.convention?.glove_bride.toString() || '',
          bouquet_husband: data.convention?.bouquet_husband.toString() || '',
          bouquet_bride: data.convention?.bouquet_bride.toString() || '',
          ceremony_husband: data.convention?.ceremony_husband.toString() || '',
          ceremony_bride: data.convention?.ceremony_bride.toString() || '',
          play_husband: data.event?.play_husband.toString() || '',
          play_bride: data.event?.play_bride.toString() || '',
          anthem_husband: data.event?.anthem_husband.toString() || '',
          anthem_bride: data.event?.anthem_bride.toString() || '',
          moderator_husband: data.event?.moderator_husband.toString() || '',
          moderator_bride: data.event?.moderator_bride.toString() || '',
          officiate_husband: data.event?.officiate_husband.toString() || '',
          officiate_bride: data.event?.officiate_bride.toString() || '',
          hanbok_pre_husband: data.hanbok?.hanbok_pre_husband.toString() || '',
          hanbok_pre_bride: data.hanbok?.hanbok_pre_bride.toString() || '',
          hanbok_post_husband:
            data.hanbok?.hanbok_post_husband.toString() || '',
          hanbok_post_bride: data.hanbok?.hanbok_post_bride.toString() || '',
          meals: data.meal?.meals || '',
          meals_price: data.meal?.meals_price.toString() || '',
          meals_num_husband: data.meal?.meals_num_husband.toString() || '',
          meals_num_bride: data.meal?.meals_num_bride.toString() || '',
          present: data.present?.present || '',
          present_price: data.present?.present_price.toString() || '',
          present_num_husband:
            data.present?.present_num_husband.toString() || '',
          present_num_bride: data.present?.present_num_bride.toString() || '',
          reserve: data.reserve?.reserve || '',
          reserve_pay: data.reserve?.reserve_pay.toString() || '',
          prepayment_husband: data.prepayment
            ? data.prepayment.prepayment_husband.toString()
            : '0',
          prepayment_bride: data.prepayment
            ? data.prepayment.prepayment_bride.toString()
            : '0',
        });
        setStartDate(new Date(data.wedding?.wedding_at || ''));
      },
      onError: () => {},
    }
  );
  const addExpenseMutate = useMutation(addExpenseAPI);
  const updateExpenseMutate = useMutation(updateExpenseAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onBack = () => {
    router.push('/weddings');
  };

  const onAddExpense = async (e: MouseEvent) => {
    e.preventDefault();

    if (
      [
        husband_name,
        bride_name,
        event_at,
        company_husband,
        company_bride,
        rooftop_husband,
        rooftop_bride,
        owner_woman_husband,
        owner_woman_bride,
        owner_man_husband,
        owner_man_bride,
        select_husband,
        select_bride,
        frame_husband,
        frame_bride,
        dress_husband,
        dress_bride,
        hairpin_husband,
        hairpin_bride,
        wig_husband,
        wig_bride,
        video_husband,
        video_bride,
        etc_husband,
        etc_bride,
        rental_husband,
        rental_bride,
        sword_husband,
        sword_bride,
        glove_husband,
        glove_bride,
        bouquet_husband,
        bouquet_bride,
        ceremony_husband,
        ceremony_bride,
        play_husband,
        play_bride,
        anthem_husband,
        anthem_bride,
        moderator_husband,
        moderator_bride,
        officiate_husband,
        officiate_bride,
        hanbok_pre_husband,
        hanbok_pre_bride,
        hanbok_post_husband,
        hanbok_post_bride,
        meals,
        meals_price,
        meals_num_husband,
        meals_num_bride,
        present,
        present_price,
        present_num_husband,
        present_num_bride,
        reserve,
        reserve_pay,
        prepayment_husband,
        prepayment_bride,
      ].includes('')
    ) {
      toast.error('빈 칸이 없도록 입력해주세요');
      return;
    }

    try {
      // 예약금
      let reserve_husband = 0;
      let reserve_bride = 0;

      if (reserve === 'half') {
        reserve_husband = parseInt(reserve_pay) / 2;
        reserve_bride = parseInt(reserve_pay) / 2;
      } else if (reserve === 'husband') {
        reserve_husband = parseInt(reserve_pay);
        reserve_bride = 0;
      } else {
        reserve_husband = 0;
        reserve_bride = parseInt(reserve_pay);
      }

      // 식대
      let meal_husband = 0;
      let meal_bride = 0;

      if (meals === 'privacy') {
        meal_husband = parseInt(meals_price) * parseInt(meals_num_husband);
        meal_bride = parseInt(meals_price) * parseInt(meals_num_bride);
      } else if (meals === 'husband') {
        meal_husband =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
        meal_bride = 0;
      } else if (meals === 'bride') {
        meal_husband = 0;
        meal_bride =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
      } else {
        meal_husband =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
        meal_bride =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
      }

      // 답례품
      let present_husband = 0;
      let present_bride = 0;

      if (present === 'privacy') {
        present_husband =
          parseInt(present_price) * parseInt(present_num_husband);
        present_bride = parseInt(present_price) * parseInt(present_num_bride);
      } else if (present === 'husband') {
        present_husband =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
        present_bride = 0;
      } else if (present === 'bride') {
        present_husband = 0;
        present_bride =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
      } else {
        present_husband =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
        present_bride =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
      }

      if (!id) {
        await addExpenseMutate.mutateAsync({
          husband_name,
          bride_name,
          wedding_at: startDate.toLocaleDateString(),
          event_at,
          company_husband: parseInt(company_husband),
          company_bride: parseInt(company_bride),
          rooftop_husband: parseInt(rooftop_husband),
          rooftop_bride: parseInt(rooftop_bride),
          owner_woman_husband: parseInt(owner_woman_husband),
          owner_woman_bride: parseInt(owner_woman_bride),
          owner_man_husband: parseInt(owner_man_husband),
          owner_man_bride: parseInt(owner_man_bride),
          select_husband: parseInt(select_husband),
          select_bride: parseInt(select_bride),
          frame_husband: parseInt(frame_husband),
          frame_bride: parseInt(frame_bride),
          dress_husband: parseInt(dress_husband),
          dress_bride: parseInt(dress_bride),
          hairpin_husband: parseInt(hairpin_husband),
          hairpin_bride: parseInt(hairpin_bride),
          wig_husband: parseInt(wig_husband),
          wig_bride: parseInt(wig_bride),
          video_husband: parseInt(video_husband),
          video_bride: parseInt(video_bride),
          etc_husband: parseInt(etc_husband),
          etc_bride: parseInt(etc_bride),
          rental_husband: parseInt(rental_husband),
          rental_bride: parseInt(rental_bride),
          sword_husband: parseInt(sword_husband),
          sword_bride: parseInt(sword_bride),
          glove_husband: parseInt(glove_husband),
          glove_bride: parseInt(glove_bride),
          bouquet_husband: parseInt(bouquet_husband),
          bouquet_bride: parseInt(bouquet_bride),
          ceremony_husband: 0,
          ceremony_bride: 0,
          play_husband: 0,
          play_bride: 0,
          anthem_husband: 0,
          anthem_bride: 0,
          moderator_husband: 0,
          moderator_bride: 0,
          officiate_husband: 0,
          officiate_bride: 0,
          hanbok_pre_husband: 0,
          hanbok_pre_bride: 0,
          hanbok_post_husband: 0,
          hanbok_post_bride: 0,
          meals,
          meals_price: parseInt(meals_price),
          meals_num_husband: parseInt(meals_num_husband),
          meals_num_bride: parseInt(meals_num_bride),
          present,
          present_price: parseInt(present_price),
          present_num_husband: parseInt(present_num_husband),
          present_num_bride: parseInt(present_num_bride),
          reserve,
          reserve_pay: parseInt(reserve_pay),
          cost_husband:
            parseInt(rental_husband) +
            parseInt(sword_husband) +
            parseInt(glove_husband) +
            parseInt(bouquet_husband) +
            0 +
            parseInt(company_husband) +
            parseInt(rooftop_husband) +
            parseInt(owner_woman_husband) +
            parseInt(owner_man_husband) +
            parseInt(select_husband) +
            parseInt(frame_husband) +
            parseInt(dress_husband) +
            parseInt(hairpin_husband) +
            parseInt(wig_husband) +
            parseInt(video_husband) +
            parseInt(etc_husband) +
            0 +
            0 +
            0 +
            0 +
            0 +
            0,
          cost_bride:
            parseInt(rental_bride) +
            parseInt(sword_bride) +
            parseInt(glove_bride) +
            parseInt(bouquet_bride) +
            0 +
            parseInt(company_bride) +
            parseInt(rooftop_bride) +
            parseInt(owner_woman_bride) +
            parseInt(owner_man_bride) +
            parseInt(select_bride) +
            parseInt(frame_bride) +
            parseInt(dress_bride) +
            parseInt(hairpin_bride) +
            parseInt(wig_bride) +
            parseInt(video_bride) +
            parseInt(etc_bride) +
            0 +
            0 +
            0 +
            0 +
            0 +
            0,
          meal_husband,
          meal_bride,
          present_husband,
          present_bride,
          reserve_husband,
          reserve_bride,
          prepayment_husband: parseInt(prepayment_husband),
          prepayment_bride: parseInt(prepayment_bride),
        });
      } else {
        await updateExpenseMutate.mutateAsync({
          id,
          husband_name,
          bride_name,
          wedding_at: startDate.toLocaleDateString(),
          event_at,
          company_husband: parseInt(company_husband),
          company_bride: parseInt(company_bride),
          rooftop_husband: parseInt(rooftop_husband),
          rooftop_bride: parseInt(rooftop_bride),
          owner_woman_husband: parseInt(owner_woman_husband),
          owner_woman_bride: parseInt(owner_woman_bride),
          owner_man_husband: parseInt(owner_man_husband),
          owner_man_bride: parseInt(owner_man_bride),
          select_husband: parseInt(select_husband),
          select_bride: parseInt(select_bride),
          frame_husband: parseInt(frame_husband),
          frame_bride: parseInt(frame_bride),
          dress_husband: parseInt(dress_husband),
          dress_bride: parseInt(dress_bride),
          hairpin_husband: parseInt(hairpin_husband),
          hairpin_bride: parseInt(hairpin_bride),
          wig_husband: parseInt(wig_husband),
          wig_bride: parseInt(wig_bride),
          video_husband: parseInt(video_husband),
          video_bride: parseInt(video_bride),
          etc_husband: parseInt(etc_husband),
          etc_bride: parseInt(etc_bride),
          rental_husband: parseInt(rental_husband),
          rental_bride: parseInt(rental_bride),
          sword_husband: parseInt(sword_husband),
          sword_bride: parseInt(sword_bride),
          glove_husband: parseInt(glove_husband),
          glove_bride: parseInt(glove_bride),
          bouquet_husband: parseInt(bouquet_husband),
          bouquet_bride: parseInt(bouquet_bride),
          ceremony_husband: 0,
          ceremony_bride: 0,
          play_husband: 0,
          play_bride: 0,
          anthem_husband: 0,
          anthem_bride: 0,
          moderator_husband: 0,
          moderator_bride: 0,
          officiate_husband: 0,
          officiate_bride: 0,
          hanbok_pre_husband: 0,
          hanbok_pre_bride: 0,
          hanbok_post_husband: 0,
          hanbok_post_bride: 0,
          meals,
          meals_price: parseInt(meals_price),
          meals_num_husband: parseInt(meals_num_husband),
          meals_num_bride: parseInt(meals_num_bride),
          present,
          present_price: parseInt(present_price),
          present_num_husband: parseInt(present_num_husband),
          present_num_bride: parseInt(present_num_bride),
          reserve,
          reserve_pay: parseInt(reserve_pay),
          cost_husband:
            parseInt(rental_husband) +
            parseInt(sword_husband) +
            parseInt(glove_husband) +
            parseInt(bouquet_husband) +
            0 +
            parseInt(company_husband) +
            parseInt(rooftop_husband) +
            parseInt(owner_woman_husband) +
            parseInt(owner_man_husband) +
            parseInt(select_husband) +
            parseInt(frame_husband) +
            parseInt(dress_husband) +
            parseInt(hairpin_husband) +
            parseInt(wig_husband) +
            parseInt(video_husband) +
            parseInt(etc_husband) +
            0 +
            0 +
            0 +
            0 +
            0 +
            0,
          cost_bride:
            parseInt(rental_bride) +
            parseInt(sword_bride) +
            parseInt(glove_bride) +
            parseInt(bouquet_bride) +
            0 +
            parseInt(company_bride) +
            parseInt(rooftop_bride) +
            parseInt(owner_woman_bride) +
            parseInt(owner_man_bride) +
            parseInt(select_bride) +
            parseInt(frame_bride) +
            parseInt(dress_bride) +
            parseInt(hairpin_bride) +
            parseInt(wig_bride) +
            parseInt(video_bride) +
            parseInt(etc_bride) +
            0 +
            0 +
            0 +
            0 +
            0 +
            0,
          meal_husband,
          meal_bride,
          present_husband,
          present_bride,
          reserve_husband,
          reserve_bride,
          prepayment_husband: parseInt(prepayment_husband),
          prepayment_bride: parseInt(prepayment_bride),
        });
      }
      toast.success('웨딩 전표 전송');
      await queryClient.invalidateQueries('listWeddings');
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    // common
    onChange,
    // Expensive Wedding
    husband_name,
    bride_name,
    wedding_at: startDate,
    event_at,
    setStartDate,
    // Convention
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    // Company
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    // Hanbok
    hanbok_pre_husband,
    hanbok_pre_bride,
    hanbok_post_husband,
    hanbok_post_bride,
    // Event
    play_husband,
    play_bride,
    anthem_husband,
    anthem_bride,
    moderator_husband,
    moderator_bride,
    officiate_husband,
    officiate_bride,
    // Meal
    meals,
    meals_price,
    meals_num_husband,
    meals_num_bride,
    // Present
    present,
    present_price,
    present_num_husband,
    present_num_bride,
    // Reserve
    reserve,
    reserve_pay,
    // Prepayment
    prepayment_husband,
    prepayment_bride,
    // Button
    onBack,
    onAddExpense,
  };
}

export default useExpense;
