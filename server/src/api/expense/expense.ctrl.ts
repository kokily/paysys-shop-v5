import type { Context } from 'koa';
import Joi from 'joi';
import Company from '../../entities/weddings/Company';
import Convention from '../../entities/weddings/Convention';
import Event from '../../entities/weddings/Event';
import Hanbok from '../../entities/weddings/Hanbok';
import Meal from '../../entities/weddings/Meal';
import Prepayment from '../../entities/weddings/Prepayment';
import Present from '../../entities/weddings/Present';
import Reserve from '../../entities/weddings/Reserve';
import Wedding from '../../entities/weddings/Wedding';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';
import { ExpenseType, UpdateExpenseType } from './expense';
import { maskingName } from '../../utils/serialize';

// Add Expense API
export async function addExpenseAPI(ctx: Context) {
  const schema = Joi.object().keys({
    husband_name: Joi.string().required(),
    bride_name: Joi.string().required(),
    wedding_at: Joi.string().required(),
    event_at: Joi.string().required(),
    company_husband: Joi.number().required(),
    company_bride: Joi.number().required(),
    rooftop_husband: Joi.number().required(),
    rooftop_bride: Joi.number().required(),
    owner_woman_husband: Joi.number().required(),
    owner_woman_bride: Joi.number().required(),
    owner_man_husband: Joi.number().required(),
    owner_man_bride: Joi.number().required(),
    select_husband: Joi.number().required(),
    select_bride: Joi.number().required(),
    frame_husband: Joi.number().required(),
    frame_bride: Joi.number().required(),
    dress_husband: Joi.number().required(),
    dress_bride: Joi.number().required(),
    hairpin_husband: Joi.number().required(),
    hairpin_bride: Joi.number().required(),
    wig_husband: Joi.number().required(),
    wig_bride: Joi.number().required(),
    video_husband: Joi.number().required(),
    video_bride: Joi.number().required(),
    etc_husband: Joi.number().required(),
    etc_bride: Joi.number().required(),
    rental_husband: Joi.number().required(),
    rental_bride: Joi.number().required(),
    sword_husband: Joi.number().required(),
    sword_bride: Joi.number().required(),
    glove_husband: Joi.number().required(),
    glove_bride: Joi.number().required(),
    bouquet_husband: Joi.number().required(),
    bouquet_bride: Joi.number().required(),
    ceremony_husband: Joi.number().required(),
    ceremony_bride: Joi.number().required(),
    play_husband: Joi.number().required(),
    play_bride: Joi.number().required(),
    anthem_husband: Joi.number().required(),
    anthem_bride: Joi.number().required(),
    moderator_husband: Joi.number().required(),
    moderator_bride: Joi.number().required(),
    officiate_husband: Joi.number().required(),
    officiate_bride: Joi.number().required(),
    hanbok_pre_husband: Joi.number().required(),
    hanbok_pre_bride: Joi.number().required(),
    hanbok_post_husband: Joi.number().required(),
    hanbok_post_bride: Joi.number().required(),
    meals: Joi.string().required(),
    meals_price: Joi.number().required(),
    meals_num_husband: Joi.number().required(),
    meals_num_bride: Joi.number().required(),
    present: Joi.string().required(),
    present_price: Joi.number().required(),
    present_num_husband: Joi.number().required(),
    present_num_bride: Joi.number().required(),
    reserve: Joi.string().required(),
    reserve_pay: Joi.number().required(),
    cost_husband: Joi.number().required(),
    cost_bride: Joi.number().required(),
    meal_husband: Joi.number().required(),
    meal_bride: Joi.number().required(),
    present_husband: Joi.number().required(),
    present_bride: Joi.number().required(),
    reserve_husband: Joi.number().required(),
    reserve_bride: Joi.number().required(),
    prepayment_husband: Joi.number().required(),
    prepayment_bride: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const {
    husband_name,
    bride_name,
    wedding_at,
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
    cost_husband,
    cost_bride,
    meal_husband,
    meal_bride,
    present_husband,
    present_bride,
    reserve_husband,
    reserve_bride,
    prepayment_husband,
    prepayment_bride,
  }: ExpenseType = ctx.request.body;

  try {
    const weddingRepo = dataSource.getRepository(Wedding);
    const conventionRepo = dataSource.getRepository(Convention);
    const companyRepo = dataSource.getRepository(Company);
    const eventRepo = dataSource.getRepository(Event);
    const hanbokRepo = dataSource.getRepository(Hanbok);
    const mealRepo = dataSource.getRepository(Meal);
    const presentRepo = dataSource.getRepository(Present);
    const reserveRepo = dataSource.getRepository(Reserve);
    const prepaymentRepo = dataSource.getRepository(Prepayment);

    // 웨딩 기본
    const wedding = new Wedding();

    wedding.husband_name = maskingName(husband_name);
    wedding.bride_name = maskingName(bride_name);
    wedding.wedding_at = wedding_at;
    wedding.event_at = event_at;
    wedding.cost_husband = cost_husband;
    wedding.cost_bride = cost_bride;
    wedding.meal_husband = meal_husband;
    wedding.meal_bride = meal_bride;
    wedding.present_husband = present_husband;
    wedding.present_bride = present_bride;
    wedding.reserve_husband = reserve_husband;
    wedding.reserve_bride = reserve_bride;

    await weddingRepo.save(wedding);

    // 컨벤션 내역
    const convention = new Convention();

    convention.rental_husband = rental_husband;
    convention.rental_bride = rental_bride;
    convention.sword_husband = sword_husband;
    convention.sword_bride = sword_bride;
    convention.glove_husband = glove_husband;
    convention.glove_bride = glove_bride;
    convention.bouquet_husband = bouquet_husband;
    convention.bouquet_bride = bouquet_bride;
    convention.ceremony_husband = ceremony_husband;
    convention.ceremony_bride = ceremony_bride;
    convention.weddingId = wedding.id;

    await conventionRepo.save(convention);

    // 웨딩업체 내역
    const company = new Company();

    company.company_husband = company_husband;
    company.company_bride = company_bride;
    company.rooftop_husband = rooftop_husband;
    company.rooftop_bride = rooftop_bride;
    company.owner_woman_husband = owner_woman_husband;
    company.owner_woman_bride = owner_woman_bride;
    company.owner_man_husband = owner_man_husband;
    company.owner_man_bride = owner_man_bride;
    company.select_husband = select_husband;
    company.select_bride = select_bride;
    company.frame_husband = frame_husband;
    company.frame_bride = frame_bride;
    company.dress_husband = dress_husband;
    company.dress_bride = dress_bride;
    company.hairpin_husband = hairpin_husband;
    company.hairpin_bride = hairpin_bride;
    company.wig_husband = wig_husband;
    company.wig_bride = wig_bride;
    company.video_husband = video_husband;
    company.video_bride = video_bride;
    company.etc_husband = etc_husband;
    company.etc_bride = etc_bride;
    company.weddingId = wedding.id;

    await companyRepo.save(company);

    // 이벤트 비용
    const event = new Event();

    event.play_husband = play_husband;
    event.play_bride = play_bride;
    event.anthem_husband = anthem_husband;
    event.anthem_bride = anthem_bride;
    event.moderator_husband = moderator_husband;
    event.moderator_bride = moderator_bride;
    event.officiate_husband = officiate_husband;
    event.officiate_bride = officiate_bride;
    event.weddingId = wedding.id;

    await eventRepo.save(event);

    // 한복 비용
    const hanbok = new Hanbok();

    hanbok.hanbok_pre_husband = hanbok_pre_husband;
    hanbok.hanbok_pre_bride = hanbok_pre_bride;
    hanbok.hanbok_post_husband = hanbok_post_husband;
    hanbok.hanbok_post_bride = hanbok_post_bride;
    hanbok.weddingId = wedding.id;

    await hanbokRepo.save(hanbok);

    // 식사 비용
    const meal = new Meal();

    meal.meals = meals;
    meal.meals_price = meals_price;
    meal.meals_num_husband = meals_num_husband;
    meal.meals_num_bride = meals_num_bride;
    meal.weddingId = wedding.id;

    await mealRepo.save(meal);

    // 답례품 비용
    const presents = new Present();

    presents.present = present;
    presents.present_price = present_price;
    presents.present_num_husband = present_num_husband;
    presents.present_num_bride = present_num_bride;
    presents.weddingId = wedding.id;

    await presentRepo.save(presents);

    // 예약금
    const reserves = new Reserve();

    reserves.reserve = reserve;
    reserves.reserve_pay = reserve_pay;
    reserves.weddingId = wedding.id;

    await reserveRepo.save(reserves);

    // 선입금 내역
    const prepayment = new Prepayment();

    prepayment.prepayment_husband = prepayment_husband;
    prepayment.prepayment_bride = prepayment_bride;
    prepayment.weddingId = wedding.id;

    await prepaymentRepo.save(prepayment);

    ctx.body = wedding;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Expense API
export async function removeExpenseAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    await dataSource.getRepository(Wedding).delete(id);
    await dataSource.getRepository(Convention).delete({ weddingId: id });
    await dataSource.getRepository(Company).delete({ weddingId: id });
    await dataSource.getRepository(Event).delete({ weddingId: id });
    await dataSource.getRepository(Hanbok).delete({ weddingId: id });
    await dataSource.getRepository(Meal).delete({ weddingId: id });
    await dataSource.getRepository(Present).delete({ weddingId: id });
    await dataSource.getRepository(Reserve).delete({ weddingId: id });
    await dataSource.getRepository(Prepayment).delete({ weddingId: id });

    ctx.status = 204;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Update Expense API
export async function updateExpenseAPI(ctx: Context) {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
    husband_name: Joi.string().required(),
    bride_name: Joi.string().required(),
    wedding_at: Joi.string().required(),
    event_at: Joi.string().required(),
    company_husband: Joi.number().required(),
    company_bride: Joi.number().required(),
    rooftop_husband: Joi.number().required(),
    rooftop_bride: Joi.number().required(),
    owner_woman_husband: Joi.number().required(),
    owner_woman_bride: Joi.number().required(),
    owner_man_husband: Joi.number().required(),
    owner_man_bride: Joi.number().required(),
    select_husband: Joi.number().required(),
    select_bride: Joi.number().required(),
    frame_husband: Joi.number().required(),
    frame_bride: Joi.number().required(),
    dress_husband: Joi.number().required(),
    dress_bride: Joi.number().required(),
    hairpin_husband: Joi.number().required(),
    hairpin_bride: Joi.number().required(),
    wig_husband: Joi.number().required(),
    wig_bride: Joi.number().required(),
    video_husband: Joi.number().required(),
    video_bride: Joi.number().required(),
    etc_husband: Joi.number().required(),
    etc_bride: Joi.number().required(),
    rental_husband: Joi.number().required(),
    rental_bride: Joi.number().required(),
    sword_husband: Joi.number().required(),
    sword_bride: Joi.number().required(),
    glove_husband: Joi.number().required(),
    glove_bride: Joi.number().required(),
    bouquet_husband: Joi.number().required(),
    bouquet_bride: Joi.number().required(),
    ceremony_husband: Joi.number().required(),
    ceremony_bride: Joi.number().required(),
    play_husband: Joi.number().required(),
    play_bride: Joi.number().required(),
    anthem_husband: Joi.number().required(),
    anthem_bride: Joi.number().required(),
    moderator_husband: Joi.number().required(),
    moderator_bride: Joi.number().required(),
    officiate_husband: Joi.number().required(),
    officiate_bride: Joi.number().required(),
    hanbok_pre_husband: Joi.number().required(),
    hanbok_pre_bride: Joi.number().required(),
    hanbok_post_husband: Joi.number().required(),
    hanbok_post_bride: Joi.number().required(),
    meals: Joi.string().required(),
    meals_price: Joi.number().required(),
    meals_num_husband: Joi.number().required(),
    meals_num_bride: Joi.number().required(),
    present: Joi.string().required(),
    present_price: Joi.number().required(),
    present_num_husband: Joi.number().required(),
    present_num_bride: Joi.number().required(),
    reserve: Joi.string().required(),
    reserve_pay: Joi.number().required(),
    cost_husband: Joi.number().required(),
    cost_bride: Joi.number().required(),
    meal_husband: Joi.number().required(),
    meal_bride: Joi.number().required(),
    present_husband: Joi.number().required(),
    present_bride: Joi.number().required(),
    reserve_husband: Joi.number().required(),
    reserve_bride: Joi.number().required(),
    prepayment_husband: Joi.number().required(),
    prepayment_bride: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const {
    id,
    husband_name,
    bride_name,
    wedding_at,
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
    cost_husband,
    cost_bride,
    meal_husband,
    meal_bride,
    present_husband,
    present_bride,
    reserve_husband,
    reserve_bride,
    prepayment_husband,
    prepayment_bride,
  }: UpdateExpenseType = ctx.request.body;

  try {
    const weddingRepo = dataSource.getRepository(Wedding);
    const conventionRepo = dataSource.getRepository(Convention);
    const companyRepo = dataSource.getRepository(Company);
    const eventRepo = dataSource.getRepository(Event);
    const hanbokRepo = dataSource.getRepository(Hanbok);
    const mealRepo = dataSource.getRepository(Meal);
    const presentRepo = dataSource.getRepository(Present);
    const reserveRepo = dataSource.getRepository(Reserve);
    const prepaymentRepo = dataSource.getRepository(Prepayment);

    // 웨딩 기본
    await weddingRepo.update(
      { id },
      {
        husband_name: maskingName(husband_name),
        bride_name: maskingName(bride_name),
        wedding_at,
        event_at,
        cost_husband,
        cost_bride,
        meal_husband,
        meal_bride,
        present_husband,
        present_bride,
        reserve_husband,
        reserve_bride,
      }
    );

    // 컨벤션 비용
    await conventionRepo.update(
      { weddingId: id },
      {
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
        weddingId: id,
      }
    );

    // 웨딩업체 내역
    await companyRepo.update(
      { weddingId: id },
      {
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
        weddingId: id,
      }
    );

    // 이벤트 내역
    await eventRepo.update(
      { weddingId: id },
      {
        play_husband,
        play_bride,
        anthem_husband,
        anthem_bride,
        moderator_husband,
        moderator_bride,
        officiate_husband,
        officiate_bride,
        weddingId: id,
      }
    );

    // 한복 내역
    await hanbokRepo.update(
      { weddingId: id },
      {
        hanbok_pre_husband,
        hanbok_pre_bride,
        hanbok_post_husband,
        hanbok_post_bride,
        weddingId: id,
      }
    );

    // 식사 비용
    await mealRepo.update(
      { weddingId: id },
      {
        meals,
        meals_price,
        meals_num_husband,
        meals_num_bride,
        weddingId: id,
      }
    );

    // 답례품 비용
    await presentRepo.update(
      { weddingId: id },
      {
        present,
        present_price,
        present_num_husband,
        present_num_bride,
        weddingId: id,
      }
    );

    // 예약금
    await reserveRepo.update(
      { weddingId: id },
      {
        reserve,
        reserve_pay,
        weddingId: id,
      }
    );

    // 선입금
    const prepayment = await prepaymentRepo.findOneBy({ weddingId: id });

    if (prepayment) {
      await prepaymentRepo.update(
        { weddingId: id },
        {
          prepayment_husband,
          prepayment_bride,
          weddingId: id,
        }
      );
    } else {
      const prepayment = new Prepayment();

      prepayment.prepayment_husband = prepayment_husband;
      prepayment.prepayment_bride = prepayment_bride;
      prepayment.weddingId = id;

      await prepaymentRepo.save(prepayment);
    }

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
