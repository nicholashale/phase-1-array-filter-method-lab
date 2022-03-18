const findMatching = (drivers, string) => drivers.filter(driverName => driverName.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (drivers, string) => drivers.filter(driverName => driverName.startsWith(string));

const matchName = (drivers, string) => drivers.filter(driverObj => driverObj.name === string);


