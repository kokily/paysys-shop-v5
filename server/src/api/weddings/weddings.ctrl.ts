import type { Context } from 'koa';
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

// List Weddings API
export async function listWeddingsAPI(ctx: Context) {
  type QueryType = {
    date?: string;
    cursor?: string;
  };

  const { date, cursor }: QueryType = ctx.query;

  try {
    const weddingRepo = dataSource.getRepository(Wedding);
    const query = weddingRepo
      .createQueryBuilder('weddings')
      .limit(40)
      .orderBy('weddings.created_at', 'DESC')
      .addOrderBy('weddings.id', 'DESC');

    if (date) {
      query.andWhere('weddings.wedding_at like :date', {
        date: `%${date}%`,
      });
    }

    if (cursor) {
      const wedding = await weddingRepo.findOneBy({ id: cursor });

      if (!wedding) {
        ctx.status = 404;
        ctx.body = '존재하지 않는 빌지입니다.';
        return;
      }

      query.andWhere('weddings.created_at < :date', {
        date: wedding.created_at,
      });

      query.orWhere('weddings.created_at = :date AND weddings.id < :id', {
        date: wedding.created_at,
        id: wedding.id,
      });
    }

    const weddings = await query.getMany();

    ctx.body = weddings;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Read Wedding API
export async function readWeddingAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

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

    const wedding = await weddingRepo.findOneBy({ id });
    const convention = await conventionRepo.findOneBy({ weddingId: id });
    const company = await companyRepo.findOneBy({ weddingId: id });
    const event = await eventRepo.findOneBy({ weddingId: id });
    const hanbok = await hanbokRepo.findOneBy({ weddingId: id });
    const meal = await mealRepo.findOneBy({ weddingId: id });
    const present = await presentRepo.findOneBy({ weddingId: id });
    const reserve = await reserveRepo.findOneBy({ weddingId: id });
    const prepayment = await prepaymentRepo.findOneBy({ weddingId: id });

    if (
      !wedding ||
      !convention ||
      !company ||
      !event ||
      !hanbok ||
      !meal ||
      !present ||
      !reserve
    ) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    ctx.body = {
      wedding,
      convention,
      company,
      event,
      hanbok,
      meal,
      present,
      reserve,
      prepayment,
    };
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
