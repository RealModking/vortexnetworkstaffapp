    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getDatabase, set, ref, push, child, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBGldHoTZK-uaORBjsxlJYhlqHSw0Oto0w",
        authDomain: "fgfewtyytregeryerf.firebaseapp.com",
        databaseURL: "https://fgfewtyytregeryerf-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "fgfewtyytregeryerf",
        storageBucket: "fgfewtyytregeryerf.appspot.com",
        messagingSenderId: "146803360569",
        appId: "1:146803360569:web:ac2bda87d96c2a441a5ee8",
        measurementId: "G-LLXTD42Y1C"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Get a reference to the database service
    const database = getDatabase(app);

    // write data
    submit.addEventListener('click', (e) => {
        var items = document.getElementById('itemsid').value;
        var itemsamount = document.getElementById('amountid').value;
        var discord = document.getElementById('discordid').value;
        var age = document.getElementById('age').value;
        var punishments = document.getElementById('punishments').value;
        var staffmember = document.getElementById('staffmember').value;
        var experience = document.getElementById('experience').value;
        var drinks = document.getElementById('drinksid').value;
        var drinksamount = document.getElementById('drinksamountid').value;

        const listId = push(child(ref(database), 'List')).key;

        set(ref(database, 'List/' + items), {
            items: items,
            itemsamount: itemsamount,
            discord: discord,
            age: age,
            punishments: punishments,
            staffmember: staffmember,
            experience: experience,
            drinks: drinks,
            drinksamount: drinksamount
        });
        alert('saved');
    });




    // read data
    getData.addEventListener('click', (e) => {

        $('#dataTbl td').remove();
        var rowNum = 0;
        const dbRef = ref(database, 'List/' + items);

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                // ...
                rowNum += 1;
                var row = "<tr><td>" + rowNum + "</td><td>" + childData.items + "</td><td>" + childData.itemsamount + "</td><td>" + childData.discord + "</td><td>" + childData.age + "</td><td>" + childData.punishments + "</td><td>" + childData.staffmember + "</td><td>" + childData.experience + "</td><td>" + childData.drinks + "</td><td>" + childData.drinksamount + "</td><td>"

                $(row).appendTo('#dataTbl');

            });
        }, {
            onlyOnce: true
        });


    });



    updateData.addEventListener('click', (e) => {
        var items = document.getElementById('itemsid').value;
        var itemsamount = document.getElementById('amountid').value;
        var drinks = document.getElementById('drinksid').value;
        var drinksamount = document.getElementById('drinksamountid').value;
//update data
    update(ref(database, 'List/' + items), {
        items: items,
        itemsamount: itemsamount,
        drinks: drinks,
        drinksamount: drinksamount
    }).then(() => {
        // Data saved successfully!
        alert('data updated');
    })
        .catch((error) => {
            // The write failed...
            alert(error);
        });
});


removeData.addEventListener('click', (e) => {
//remove data
    removeData.addEventListener('click',(e) => {
        var items = document.getElementById('itemsid').value;

        remove(ref(database, 'List/' + items), {

        items: items

    }).then(() => {
        // Data saved successfully!
        alert('Data Remove');
    })
        .catch((error) => {
            // The write failed...
            alert(error);
        });
    });
});
