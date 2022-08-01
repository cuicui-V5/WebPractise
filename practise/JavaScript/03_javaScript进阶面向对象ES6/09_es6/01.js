let num = 1;
if (true) {
    console.log(num); //暂时性死区
    let num = 2;
}