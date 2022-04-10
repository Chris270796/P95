// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdkfVpBe2cPZS2_s06hkDs0UGsHLYWb1E",
    authDomain: "p-94-c9544.firebaseapp.com",
    databaseURL: "https://p-94-c9544-default-rtdb.firebaseio.com",
    projectId: "p-94-c9544",
    storageBucket: "p-94-c9544.appspot.com",
    messagingSenderId: "520792032411",
    appId: "1:520792032411:web:6eefa383f5b4d204f2323e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}