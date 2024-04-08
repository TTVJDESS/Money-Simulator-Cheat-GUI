// ==UserScript==
// @name         Money Simulator Hack Gui Made by JDESS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This a Hack menu made entirly by me and its made for my game(http://money-sim.free.nf/?i=2) and it world mean the world to me if you tried it out and my game. PS. this script took me 2 hours to code everything
// @author       JDESS
// @match        http://money-sim.free.nf/?i=2*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    const dropdownContainer = document.createElement('div');
    dropdownContainer.style.display = 'inline-block';
    dropdownContainer.style.marginRight = '20px';

    const babeDropdownContainer = document.createElement('div');
    babeDropdownContainer.style.position = 'relative';
    babeDropdownContainer.style.display = 'inline-block';

    const babeDropdownButton = document.createElement('button');
    babeDropdownButton.textContent = 'Autoclicker';
    babeDropdownButton.style.padding = '10px';
    babeDropdownButton.style.backgroundColor = '#007bff';
    babeDropdownButton.style.color = '#fff';
    babeDropdownButton.style.border = 'none';
    babeDropdownButton.style.cursor = 'pointer';

    const babeDropdownContent = document.createElement('div');
    babeDropdownContent.style.display = 'none';
    babeDropdownContent.style.position = 'absolute';
    babeDropdownContent.style.backgroundColor = '#f9f9f9';
    babeDropdownContent.style.minWidth = '200px';
    babeDropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    babeDropdownContent.style.zIndex = '1';
    babeDropdownContent.style.padding = '10px';

    const toggleSwitch = document.createElement('input');
    toggleSwitch.type = 'checkbox';
    toggleSwitch.id = 'toggleSwitch';
    const toggleLabel = document.createElement('label');
    toggleLabel.htmlFor = 'toggleSwitch';
    toggleLabel.textContent = 'Autoclicker';
    toggleLabel.style.marginRight = '10px';

    const sliderLabel2 = document.createElement('label');
    sliderLabel2.textContent = 'Autoclicker Speed: ';
    const sliderInput2 = document.createElement('input');
    sliderInput2.type = 'range';
    sliderInput2.min = '0';
    sliderInput2.max = '100';
    sliderInput2.value = '50';

    const sliderLabel3 = document.createElement('label');
    sliderLabel3.textContent = 'CPS of AC: ';
    const sliderInput3 = document.createElement('input');
    sliderInput3.type = 'range';
    sliderInput3.min = '0';
    sliderInput3.max = '100';
    sliderInput3.value = '50';

    const dropdownLabel4 = document.createElement('label');
    dropdownLabel4.textContent = '';
    const dropdownButton4 = document.createElement('button');
    dropdownButton4.textContent = 'Clicker Type';
    dropdownButton4.style.padding = '10px';
    dropdownButton4.style.backgroundColor = '#007bff';
    dropdownButton4.style.color = '#fff';
    dropdownButton4.style.border = 'none';
    dropdownButton4.style.cursor = 'pointer';

    const dropdownContent4 = document.createElement('div');
    dropdownContent4.style.display = 'none';
    dropdownContent4.style.position = 'absolute';
    dropdownContent4.style.backgroundColor = '#f9f9f9';
    dropdownContent4.style.minWidth = '200px';
    dropdownContent4.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    dropdownContent4.style.zIndex = '1';
    dropdownContent4.style.padding = '10px';

    const nestedDropdownButton = document.createElement('button');
    nestedDropdownButton.textContent = 'Upgrade click value';
    nestedDropdownButton.style.padding = '10px';
    nestedDropdownButton.style.backgroundColor = '#007bff';
    nestedDropdownButton.style.color = '#fff';
    nestedDropdownButton.style.border = 'none';
    nestedDropdownButton.style.cursor = 'pointer';

    const nestedDropdownContent = document.createElement('div');
    nestedDropdownContent.style.display = 'none';
    nestedDropdownContent.style.position = 'absolute';
    nestedDropdownContent.style.top = '100%';
    nestedDropdownContent.style.left = '0';
    nestedDropdownContent.style.backgroundColor = '#f9f9f9';
    nestedDropdownContent.style.minWidth = '160px';
    nestedDropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    nestedDropdownContent.style.zIndex = '1';

    const nestedOptions = ['Upgrade click value (10 money)', 'Upgrade click value (50 money)', 'Upgrade click value (100 money)', 'Upgrade click value (200 money)', 'Upgrade click value (500 money)'];

    nestedOptions.forEach((nestedOptionText) => {
        const nestedOptionItem = document.createElement('button');
        nestedOptionItem.textContent = nestedOptionText;
        nestedOptionItem.style.padding = '10px';
        nestedOptionItem.style.marginTop = '5px';
        nestedOptionItem.style.display = 'block';
        nestedOptionItem.style.backgroundColor = '#007bff';
        nestedOptionItem.style.color = '#fff';
        nestedOptionItem.style.border = 'none';
        nestedOptionItem.style.cursor = 'pointer';

        nestedOptionItem.addEventListener('click', () => {
            // Handle click on nested option button here
            alert('Clicked ' + nestedOptionText);
        });

        nestedDropdownContent.appendChild(nestedOptionItem);
    });

    function openDropdown() {
        babeDropdownContent.style.display = 'block';
        document.addEventListener('click', handleOutsideClick);
    }

    function closeDropdown() {
        babeDropdownContent.style.display = 'none';
        document.removeEventListener('click', handleOutsideClick);
    }

    function openDropdown4() {
        dropdownContent4.style.display = 'block';
        document.addEventListener('click', handleOutsideClick4);
    }

    function closeDropdown4() {
        dropdownContent4.style.display = 'none';
        document.removeEventListener('click', handleOutsideClick4);
    }

    function openNestedDropdown() {
        nestedDropdownContent.style.display = 'block';
        document.addEventListener('click', handleNestedOutsideClick);
    }

    function closeNestedDropdown() {
        nestedDropdownContent.style.display = 'none';
        document.removeEventListener('click', handleNestedOutsideClick);
    }

    function handleOutsideClick(event) {
        if (!babeDropdownContainer.contains(event.target)) {
            closeDropdown();
        }
    }

    function handleOutsideClick4(event) {
        if (!dropdownButton4.contains(event.target) && !dropdownContent4.contains(event.target)) {
            closeDropdown4();
        }
    }

    function handleNestedOutsideClick(event) {
        if (!nestedDropdownButton.contains(event.target) && !nestedDropdownContent.contains(event.target)) {
            closeNestedDropdown();
        }
    }

    babeDropdownContainer.appendChild(babeDropdownButton);
    babeDropdownContainer.appendChild(babeDropdownContent);
    dropdownContainer.appendChild(babeDropdownContainer);

    babeDropdownContent.appendChild(toggleLabel);
    babeDropdownContent.appendChild(toggleSwitch);
    babeDropdownContent.appendChild(document.createElement('br'));
    babeDropdownContent.appendChild(sliderLabel2);
    babeDropdownContent.appendChild(sliderInput2);
    babeDropdownContent.appendChild(document.createElement('br'));
    babeDropdownContent.appendChild(sliderLabel3);
    babeDropdownContent.appendChild(sliderInput3);
    babeDropdownContent.appendChild(document.createElement('br'));

    dropdownLabel4.appendChild(dropdownButton4);
    babeDropdownContent.appendChild(dropdownLabel4);
    babeDropdownContent.appendChild(dropdownContent4);

    babeDropdownButton.addEventListener('click', () => {
        if (babeDropdownContent.style.display === 'block') {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    dropdownButton4.addEventListener('click', () => {
        if (dropdownContent4.style.display === 'block') {
            closeDropdown4();
        } else {
            openDropdown4();
        }
    });

    dropdownContent4.appendChild(nestedDropdownButton);
    dropdownContent4.appendChild(nestedDropdownContent);

    nestedDropdownButton.addEventListener('click', () => {
        if (nestedDropdownContent.style.display === 'block') {
            closeNestedDropdown();
        } else {
            openNestedDropdown();
        }
    });

    // Adding Menu Dropdown
    const menuDropdownContainer = document.createElement('div');
    menuDropdownContainer.style.position = 'relative';
    menuDropdownContainer.style.display = 'inline-block';

    const menuDropdownButton = document.createElement('button');
    menuDropdownButton.textContent = 'Buy auto money generator';
    menuDropdownButton.style.padding = '10px';
    menuDropdownButton.style.backgroundColor = '#007bff';
    menuDropdownButton.style.color = '#fff';
    menuDropdownButton.style.border = 'none';
    menuDropdownButton.style.cursor = 'pointer';

    const menuDropdownContent = document.createElement('div');
    menuDropdownContent.style.display = 'none';
    menuDropdownContent.style.position = 'absolute';
    menuDropdownContent.style.backgroundColor = '#f9f9f9';
    menuDropdownContent.style.minWidth = '160px';
    menuDropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    menuDropdownContent.style.zIndex = '1';
    menuDropdownContent.style.padding = '10px';

    const menuOptions = ['Buy Auto Money Generator (50 Money)', 'Buy Auto Money Generator (200 Money)', 'Buy Auto Money Generator (200 Money)', 'Buy Auto Money Generator (1000 Money)'];

    menuOptions.forEach((optionText) => {
        const menuItem = document.createElement('div');
        menuItem.textContent = optionText;
        menuItem.style.padding = '10px';
        menuItem.style.cursor = 'pointer';

        menuItem.addEventListener('click', () => {
            alert('Clicked ' + optionText);
        });

        menuDropdownContent.appendChild(menuItem);
    });

    function openMenuDropdown() {
        menuDropdownContent.style.display = 'block';
        document.addEventListener('click', handleMenuOutsideClick);
    }

    function closeMenuDropdown() {
        menuDropdownContent.style.display = 'none';
        document.removeEventListener('click', handleMenuOutsideClick);
    }

    function handleMenuOutsideClick(event) {
        if (!menuDropdownContainer.contains(event.target)) {
            closeMenuDropdown();
        }
    }

    menuDropdownContainer.appendChild(menuDropdownButton);
    menuDropdownContainer.appendChild(menuDropdownContent);
    dropdownContainer.appendChild(menuDropdownContainer);

    menuDropdownButton.addEventListener('click', () => {
        if (menuDropdownContent.style.display === 'block') {
            closeMenuDropdown();
        } else {
            openMenuDropdown();
        }
    });

    document.body.appendChild(dropdownContainer);

})();
