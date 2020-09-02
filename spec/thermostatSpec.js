describe('Thermostat', function(){
  let thermostat;

  it('starts at 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  

});