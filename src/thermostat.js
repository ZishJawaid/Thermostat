class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MINIMUM_TEMP = 10;
    this.PSM_ON_MAX_TEMP = 25;
    this.PSM_OFF_MAX_TEMP = 32;
    this.powerSavingMode = true;
  };

  displayTemperature() {
    return this.temperature;
  };

  up() {
    if(this.isMaxTemperature()) {
      return;
    }
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

  isMaxTemperature(){
    if(this.isPowerSavingModeOn() === true){
      return this.temperature === this.PSM_ON_MAX_TEMP;
    }
      return this.temperature === this.PSM_OFF_MAX_TEMP;
  };

  reset(){
    this.temperature = this.DEFAULT_TEMP;
  };

  energyUsage(){
    if (this.temperature < 18){
      return 'Low-Usage';
    }
    else if (this.temperature <= 25) {
      return 'Medium-Usage';
    }
    else {
      return 'High-Usage';
    }
  };

};