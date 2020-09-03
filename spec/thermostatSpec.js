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

  it('defaults with power saving mode set to on', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('sets the power saving mode to off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });

  it('turns the power saving mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('resets temperature to the default value of 20 degrees', function(){
    thermostat.up();
    thermostat.up();
    expect(thermostat.displayTemperature()).toEqual(22);
    thermostat.reset();
    expect(thermostat.displayTemperature()).toEqual(20);
  });

    describe('Energy usage', function(){
      it('displays medium usage when temp <= 25', function(){
        expect(thermostat.energyUsage()).toEqual('Medium-Usage');
      });
      
      it('displays low usage when temp < 18', function(){
        for (var i = 0; i < 4; i++) {
          thermostat.down()
        }
        expect(thermostat.energyUsage()).toEqual('Low-Usage');
      });

      it('displays high usage when temp > 26', function(){
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 7; i++){
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('High-Usage');
      });
  });

    describe('when power saving mode is on', function(){
      it('sets a max temp of 25 degrees', function(){
        for(var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.displayTemperature()).toEqual(25);
      });
    });
  
    describe('when power saving mode is off', function(){
      it('sets a max temp of 32 degress', function(){
        thermostat.switchPowerSavingModeOff();
        for(var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.displayTemperature()).toEqual(32)
      });
    });

});