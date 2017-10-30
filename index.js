// Write your solution in this file!
const driver = { name: 'gene' };

function updateDriverWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function deleteFromDriverByKey (driver, key) {
  let newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];
  return driver;
}
