// ===================BUSINESS LOGIC========================
function MyPlaces(){
  this.places = [],
  this.placeId = 0
}

MyPlaces.prototype.addPlace = function(place) {
  place.id = this.setId();
  this.places.push(place);
}

MyPlaces.prototype.setId = function(){
  this.placeId +=1;
  return this.placeId;
}

function Place (name, date, location){
  this.name = name;
  this.date = date;
  this.lacation = location;
}

MyPlaces.prototype.findPlace = function(id) {
  for(var i = 0; i < this.places.length; i++){
    if(this.places[i]){
      if(this.places[i].id == id){
        return this.places[i];
      }
    }
  };
  return false;
}

MyPlaces.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

// ====================USER INTERFACE=====================

var myPlaces = new MyPlaces();

function displayPlaceDetails(myPlacesToDisplay) {
  var placesList = $("ul#my-places");
  var htmlForPlaceInfo = "";
  myPlacesToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.name + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
};

function showPlace(placeId){
  var place = myPlaces.findPlace(placeId);
  $("#show-places").show();
  $(".place-name").html(place.name);
  $(".time-of-the-year").html(place.date);
  $(".location").html(place.name);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + place.id + ">Delete</button>");
}

function attachPlaceListeners(){
  $("ul#my-places").on("click","li",function(){
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    myPlaces.deletePlace(this.id);
    $("#show-places").hide();
    displayPlaceDetails(myPlaces);
  });
};


$(document).ready(function(){
  attachPlaceListeners();
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputPlaceName = $("input#place-name").val();
    var inputDate = $("input#time-of-the-year").val();
    var inputLocation = $("input#location").val();

    $("input#place-name").val("");
    $("input#time-of-the-year").val("");
    $("input#location").val("");

    var newPlace = new Place (inputPlaceName, inputDate, inputLocation);
    myPlaces.addPlace(newPlace);
    displayPlaceDetails(myPlaces);
  });
});



// // Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = [],
//   this.currentId = 0
// }
//
// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// }
//
// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//
// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   };
//   return false;
// }
//
// AddressBook.prototype.deleteContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }
//
// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.phoneNumber = phoneNumber
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//
// // User Interface Logic ---------
// var addressBook = new AddressBook();
//
// function displayContactDetails(addressBookToDisplay) {
//   var contactsList = $("ul#contacts");
//   var htmlForContactInfo = "";
//   addressBookToDisplay.contacts.forEach(function(contact) {
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// };
//
// function showContact(contactId) {
//   var contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   var buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
// }
//
// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// };
//
// $(document).ready(function() {
//   attachContactListeners();
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedPhoneNumber = $("input#new-phone-number").val();
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-phone-number").val("");
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook);
//   });
// });
