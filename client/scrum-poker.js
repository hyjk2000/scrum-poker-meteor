Template.body.helpers({
  values: () => {
    return [{caption: '0', value: 0},
            {caption: '½', value: 0.5},
            {caption: '1', value: 1},
            {caption: '2', value: 2},
            {caption: '3', value: 3},
            {caption: '5', value: 5},
            {caption: '8', value: 8},
            {caption: '13', value: 13},
            {caption: '20', value: 20},
            {caption: '40', value: 40},
            {caption: '100', value: 100},
            {caption: '?'}];
  },
  table: () => {
    return {
      name: Tables.defaultName,
      story: 'Story 1'
    };
  },
  players: () => {
    return [{
      name: 'James',
      vote: '13',
    },{
      name: 'Greg',
      vote: '13',
    },{
      name: 'Hiveer',
      vote: '100',
    },{
      name: 'Xiaobao',
      vote: '8',
    }];
  },
});
