class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSavingMode = true;
  };

  displayTemperature() {
    return this.temperature;
  };

  up(){
    
    this.temperature += 1;
  };

  down(){
    if(this.isMinimumTemp()) {
      return;
    }
    this.temperature -= 1;
  };

  isMinimumTemp(){
    if(this.temperature === this.MINIMUM_TEMP) {
      return true;
    }
  };

  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  };

  switchPowerSavingModeOff(){
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn(){
    this.powerSavingMode = true;
  };
};