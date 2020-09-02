describe('Thermostat', function(){
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.displayTemperature()).toEqual(20);
  });

  it('increases the temp with up function', function(){
    thermostat.up();
    expect(thermostat.displayTemperature()).toEqual(21);
  });

  it('decreases the temp with down function ', function(){
    thermostat.down();
    expect(thermostat.displayTemperature()).toEqual(19);
  });

  it('can be set to a min temp of 10 degress', function(){
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.displayTemperature()).toEqual(10);

  });

});