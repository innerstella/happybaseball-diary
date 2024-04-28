const getWinningRate = (userData: any, season: number) => {
  let sum = 0;
  let cnt = 0;

  userData.forEach((data: any) => {
    if (data.date.slice(0, 2) === season.toString().slice(2, 4)) {
      sum += data.count;
      cnt++;
    }
  });

  return (sum / cnt).toFixed(3);
};

export default getWinningRate;
