document.getElementById('androidBtn').addEventListener('click', setAndroid)
document.getElementById('appleBtn').addEventListener('click', setApple)

function setAndroid() {
    console.log('set android')
    document.getElementById('img').src = 'images/Android-Logo.jpg';
    document.getElementById('btn').innerHTML = 'Android Home';
    document.getElementById('btn').style.backgroundColor = '#a4c93b';
    document.getElementById('btn').href = 'https://www.android.com/';
    document.body.style.backgroundColor = '#a4c93b';
}

function setApple() {
    console.log('set apple')
    document.getElementById('img').src = 'images/Apple-Logo.jpg';
    document.getElementById('btn').innerHTML = 'Apple Home';
    document.getElementById('btn').style.backgroundColor = '#b6bcca';
    document.getElementById('btn').href = 'https://www.apple.com/';
    document.body.style.backgroundColor = '#b6bcca';
}