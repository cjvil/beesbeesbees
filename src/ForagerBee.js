var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
};

ForagerBee.prototype = Object.create(Bee.prototype);

