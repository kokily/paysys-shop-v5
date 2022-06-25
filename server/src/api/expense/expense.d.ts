export type ExpenseType = {
  husband_name: string;
  bride_name: string;
  wedding_at: string;
  event_at: string;
  company_husband: number;
  company_bride: number;
  rooftop_husband: number;
  rooftop_bride: number;
  owner_woman_husband: number;
  owner_woman_bride: number;
  owner_man_husband: number;
  owner_man_bride: number;
  select_husband: number;
  select_bride: number;
  frame_husband: number;
  frame_bride: number;
  dress_husband: number;
  dress_bride: number;
  hairpin_husband: number;
  hairpin_bride: number;
  wig_husband: number;
  wig_bride: number;
  video_husband: number;
  video_bride: number;
  etc_husband: number;
  etc_bride: number;
  rental_husband: number;
  rental_bride: number;
  sword_husband: number;
  sword_bride: number;
  glove_husband: number;
  glove_bride: number;
  bouquet_husband: number;
  bouquet_bride: number;
  ceremony_husband: number;
  ceremony_bride: number;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  reserve: string;
  reserve_pay: number;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
  prepayment_husband: number;
  prepayment_bride: number;
};

export type UpdateExpenseType = {
  id: string;
} & ExpenseType;