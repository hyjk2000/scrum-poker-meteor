Tables = new Mongo.Collection('tables');
Tables.defaultName = () => {
  let today = new Date();
  return `Grooming ${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
};

Players = new Mongo.Collection('players');
