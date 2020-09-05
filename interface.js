$(document).ready(function() {
    let thermostat = new Thermostat();
        updateTemp();

    $('#temperature-up').on('click', function(){
        thermostat.up();
        updateTemp();
    })

    $('#temperature-down').on('click', function(){
        thermostat.down();
        updateTemp();
    })

    $('#temperature-reset').on('click', function(){
        thermostat.reset();
        updateTemp();        
    })

    $('#powersaving-on').on('click', function(){
        thermostat.switchPowerSavingModeOn();
        $('#power-saving').text('on')
        updateTemp();
    })

    $('#powersaving-off').on('click', function(){
        thermostat.switchPowerSavingModeOff();
        $('#power-saving').text('off')
        updateTemp();
    })


    function updateTemp(){
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };


})