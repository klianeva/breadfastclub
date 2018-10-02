var config = {
    apiKey: "AIzaSyCavAigLseKA7kHJCL5OrBTqcOzRp7dDCM",
    authDomain: "breadfastclub4565.firebaseapp.com",
    databaseURL: "https://breadfastclub4565.firebaseio.com",
    projectId: "breadfastclub4565",
    storageBucket: "breadfastclub4565.appspot.com",
    messagingSenderId: "373290101536"
};

firebase.initializeApp(config);


var db = firebase.firestore();

 
db.settings({ timestampsInSnapshots: true });

db.collection("products").get().then(function(querySnapshot) {
    var categories = {};

    querySnapshot.forEach(function(doc) {
        var data = doc.data();
        if (categories[data.category] == undefined) categories[data.category] = [];
        categories[data.category].push(data);
    });


    for (var category in categories) {
        var productshtml = "";

        categories[category].forEach((p) => {
            productshtml += ` <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="box ">
                <div class="icon">
                  <div id="productcategoryimage">
                  <h3 class="title text">${p.name}</h3>
                  <img src="${p.photo}" width="100%" height="100%" style="padding-bottom:10%;" >   
                  </div>
                </div>
              </div>
              <div class="space"></div>
            </div>`;
        });

        $("#containers").append(`<div id="productcategory"class="container-fluid pageslp ">
			<div class="row">
			<div class="col-lg-12">
			<div class="content">
			<h1 class="text">${category}</h1>
			<div class="container " >
			<div class="row" >  ${productshtml} 
			</div></div></div></div></div></div></div></div></div><hr>`);
    }
});