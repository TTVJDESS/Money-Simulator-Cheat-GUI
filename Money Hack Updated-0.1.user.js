// ==UserScript==
// @name         Money Hack Updated
// @namespace    https://github.com/TTVJDESS/Money-Simulator-Cheat-GUI
// @version      0.1
// @description  Custom Hack For My Website(http://money-sim.free.nf/)
// @author       JDESS
// @match        http://money-sim.free.nf/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a container for the GUI
    let CheatMenu = document.createElement('div');
    CheatMenu.style.position = 'fixed';
    CheatMenu.style.top = '20px';
    CheatMenu.style.left = '20px';
    CheatMenu.style.width = '168px';
    CheatMenu.style.backgroundColor = 'rgba(255, 192, 203, 0.7)'; // Pink with 50% opacity
    CheatMenu.style.border = '2px solid #8b008b'; // Darker outline
    CheatMenu.style.color = 'black'; // Black text

    // Create the main dropdown container
    const CheatMenuDropdown = document.createElement('div');
    CheatMenuDropdown.style.position = 'fixed';
    CheatMenuDropdown.style.top = '20px';
    CheatMenuDropdown.style.left = '20px';
    CheatMenu.appendChild(CheatMenuDropdown);

    // Create the button to toggle the dropdown
    const CheatMenuButton = document.createElement('button');
    CheatMenuButton.textContent = 'Cheat Menu by JDESS 🢃';
    CheatMenuButton.style.marginTop = '0px';
    CheatMenuButton.style.color = 'Navy';
    CheatMenuButton.style.backgroundColor = 'transparent'; // Pink with 50% opacity
    CheatMenu.appendChild(CheatMenuButton);

    // Create a container for the GUI
    const MainFeatures = document.createElement('div');
    // Apply various styles using element.style
    MainFeatures.style.fontSize = '16px';
    MainFeatures.style.display = 'none'; // Initially hide the dropdown content
    MainFeatures.style.fontWeight = 'bold';
    MainFeatures.style.opacity = '0.9';
    CheatMenu.appendChild(MainFeatures);

    // Create the dropdown content
    const AutoClickerContent = document.createElement('div');
    AutoClickerContent.style.backgroundColor = 'transparent';
    MainFeatures.appendChild(AutoClickerContent);

    // Create the button to toggle the dropdown
    const AutoClickerButton = document.createElement('button');
    AutoClickerButton.textContent = 'Autoclicker 🢃';
    AutoClickerButton.style.color = 'black';
    AutoClickerButton.style.color = 'navy';
    AutoClickerButton.style.width = '158px';
    AutoClickerButton.style.marginTop = '0px';
    AutoClickerButton.style.padding = '0px';
    AutoClickerButton.style.fontSize = '16px';
    AutoClickerButton.style.fontWeight = 'bold';
    AutoClickerButton.style.opacity = '0.9';
    AutoClickerButton.style.backgroundColor = 'transparent'; // Pink with 50% opacity
    AutoClickerContent.appendChild(AutoClickerButton);

    // Create a container for the GUI
    const AutoclickerSettings = document.createElement('div');
    // Apply various styles using element.style
    AutoclickerSettings.style.fontSize = '16px';
    AutoclickerSettings.style.display = 'none'; // Initially hide the dropdown content
    AutoclickerSettings.style.fontWeight = 'bold';
    AutoclickerSettings.style.opacity = '0.9';
    MainFeatures.appendChild(AutoclickerSettings);

    // Create the on/off switch (toggle) for Auto Buy
    const AutoClickerSwitch = document.createElement('input');
    AutoClickerSwitch.type = 'checkbox';
    AutoClickerSwitch.id = 'autoBuySwitch'; // Assign an ID for styling and event handling
    AutoClickerSwitch.style.marginTop = '10px';
    AutoClickerSwitch.style.appearance = 'none'; // Hide default checkbox appearance

    // Styling for the custom switch (toggle)
    const switchStyle = document.createElement('style');
    switchStyle.textContent = `
        #autoBuySwitch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            background-color: grey;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #autoBuySwitch::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            top: 2px;
            left: 2px;
            background-color: white;
            transition: transform 0.3s;
        }
        #autoBuySwitch:checked::before {
            transform: translateX(20px);
        }
    `;

    // Append the custom switch styles to the document head
    document.head.appendChild(switchStyle);

    // Append the custom switch to the Auto Buy settings
    AutoclickerSettings.appendChild(AutoClickerSwitch);


    // Create a slider (range input) for settings
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '1000';
    slider.value = '100'; // Default value
    slider.style.width = '100%'; // Set the width to fill the container
    slider.style.marginTop = '10px';
    AutoclickerSettings.appendChild(slider);

    // Create the dropdown content
    const ddContent1 = document.createElement('div');
    ddContent1.style.backgroundColor = 'transparent';
    MainFeatures.appendChild(ddContent1);

    // Create the button to toggle the dropdown
    const ddButton1 = document.createElement('button');
    ddButton1.textContent = 'Auto Buy 🢃';
    ddButton1.style.color = 'black';
    ddButton1.style.color = 'navy';
    ddButton1.style.width = '158px';
    ddButton1.style.marginTop = '0px';
    ddButton1.style.padding = '0px';
    ddButton1.style.fontSize = '16px';
    ddButton1.style.fontWeight = 'bold';
    ddButton1.style.opacity = '0.9';
    ddButton1.style.backgroundColor = 'transparent'; // Pink with 50% opacity
    ddContent1.appendChild(ddButton1);

    // Create a container for the GUI
    const AutoBuySettings = document.createElement('div');
    // Apply various styles using element.style
    AutoBuySettings.style.fontSize = '16px';
    AutoBuySettings.style.display = 'none'; // Initially hide the dropdown content
    AutoBuySettings.style.fontWeight = 'bold';
    AutoBuySettings.style.opacity = '0.9';
    AutoBuySettings.style.zIndex = '9999'; // Ensure GUI appears above other elements
    MainFeatures.appendChild(AutoBuySettings);

    // Create the button to toggle the dropdown
    const Autobuy = document.createElement('button');
    Autobuy.textContent = 'Auto Buy Everything';
    Autobuy.style.marginTop = '0px';
    Autobuy.style.color = 'Navy';
    Autobuy.style.backgroundColor = 'transparent'; // Pink with 50% opacity
    AutoBuySettings.appendChild(Autobuy);

        CheatMenuButton.addEventListener('click', function() {
        if (MainFeatures.style.display === 'none') {
            MainFeatures.style.display = 'block';
        } else {
            MainFeatures.style.display = 'none';
        }
    });

        ddButton1.addEventListener('click', function() {
        if (AutoBuySettings.style.display === 'none') {
            AutoBuySettings.style.display = 'block';
        } else {
            AutoBuySettings.style.display = 'none';
        }
    });

        AutoClickerButton.addEventListener('click', function() {
        if (AutoclickerSettings.style.display === 'none') {
            AutoclickerSettings.style.display = 'block';
        } else {
            AutoclickerSettings.style.display = 'none';
        }
     });

// Add key event listener to toggle the GUI with the 'h' key
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'h' (key code 72)
    if (event.key === 'h') {
        // Toggle the display of the main features GUI
        if (CheatMenu.style.display === 'none') {
            CheatMenu.style.display = 'block';
        } else {
            CheatMenu.style.display = 'none';
        }
    }
});


    document.body.appendChild(CheatMenu);

})();