let friends = [];

function addFriend() {
    const friend = document.getElementById('friend').value.trim();

    if (!friend) {
        alert("Please enter a name.");
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(friend)) {
        alert("Names cannot contain numbers or special characters.");
        return;
    }

    if (friends.includes(friend)) {
        alert("This friend is already in the list.");
        return;
    }

    friends.push(friend);
    document.getElementById('friend').value = '';
    updateFriendsList();
}

function updateFriendsList() {
    const list = document.getElementById('FriendsList');
    list.innerHTML = '';

    friends.forEach((friend) => {
        const li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}

function sortearAmigo() {
    if (friends.length < 2) {
        alert("You need at least two friends to draw a name.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];
    document.getElementById('resultado').textContent = `The secret friend is: ${secretFriend}`;
}

function reiniciar() {
    friends = [];
    document.getElementById('FriendsList').innerHTML = '';
    document.getElementById('resultado').textContent = '';
}