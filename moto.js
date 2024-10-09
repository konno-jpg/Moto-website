console.log('hi');

function openLogin() {
    const loginContainer = document.querySelector('.logincontainer');
    const loginBox = document.querySelector('.loginbox');
    const background = document.querySelector('.background1');

    if (!loginContainer.classList.contains('openMenu')) {
        loginContainer.classList.add('openMenu');
        loginBox.classList.add('transformLoginbox');
        background.classList.add('background');
    } else {
        alert('Login bereits geöffnet!')
    }
}

function closeLogin() {
    const loginContainer = document.querySelector('.logincontainer');
    const loginBox = document.querySelector('.loginbox');
    const background = document.querySelector('.background1');

    loginContainer.classList.remove('openMenu');
    loginBox.classList.remove('transformLoginbox');
    background.classList.remove('background');
}