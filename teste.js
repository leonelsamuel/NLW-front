const sortObjectKeys = (obj) => {
    return Object.keys(obj).sort().reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  }
const sortItems = (obj) => {
    let formattedObj = sortObjectKeys({ ...obj });
    Object.keys(formattedObj).forEach((key) => {
      if (typeof formattedObj[key] === 'object' && !Array.isArray(formattedObj[key])) { formattedObj[key] = executeSort(formattedObj[key]); }
      if (Array.isArray(formattedObj[key])) { formattedObj[key] = formattedObj[key].map((arrItem) => executeSort(arrItem)); }
    });
    return formattedObj;
  }
const executeSort = (obj) => {
    if (Array.isArray(obj)) { return obj.map((currentItem) => sortItems(currentItem)); }
    return sortItems(obj);
  }

  executeSort([{
      name: {}
  }])

  //