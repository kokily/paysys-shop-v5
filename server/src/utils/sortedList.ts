import Bill from '../entities/Bill';

type SortedDataType = {
  name: string;
  count: number;
};

type ResultType = [string, number];

function getSortedCount(array: string[]): ResultType[] {
  const counts = array.reduce((pv: any, cv: any) => {
    pv[cv] = (pv[cv] || 0) + 1;

    return pv;
  }, []);

  const results: ResultType[] = [];

  for (let key in counts) {
    results.push([key, counts[key]]);
  }

  results.sort((fst, sec) => {
    return sec[1] - fst[1];
  });

  return results;
}

function getSortedList(bills: Bill[]): SortedDataType[] {
  let prevList: string[] = [];
  let sortedData: SortedDataType[] = [];

  bills.map((bill) => {
    prevList.push(bill.title);
  });

  const list = getSortedCount(prevList);

  sortedData = list.map((item) => ({
    name: item[0],
    count: item[1],
  }));

  return sortedData;
}

export default getSortedList;
