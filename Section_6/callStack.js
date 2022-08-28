function Greetings() {
    console.log("Greetings my friend");
    setTimeout(() => {
        console.log('That\'s 2 seconds, see you later')
    }, 2000);
    SayMyName()
}

function SayMyName() {
    console.log('My Name is Uqyanzie');
}

Greetings();