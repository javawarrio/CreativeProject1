let app = new Vue({
  el: '#app',
  data: {
    listings: [{
      addedName: '',
      addedPrice: '',
      addedListing: '',
      addedAnimal: '',
      addedNumber: '',
      addedGender: '',
      addedNewsletter: '',
    }],
progress: 0,

},
  /*watch: {

  }, */

  methods: {
    addListing() {
       Vue.set(app.listings,new Array);
      this.listings.push({
      //  date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        name: "Name: " + this.addedName,
        phone: "Phone Number: " + this.addedNumber,
        animal: "Animal: " + this.addedAnimal,
        price:  "Price: $" + this.addedPrice,
        gender: "Gender: " + this.addedGender,
        newsletter: this.addedNewsletter,

      });
      this.addedName = '';
      this.addedNumber = '';
      this.addedAnimal = '';
      this.addedPrice = '';
      this.addedGender = '';
      this.addedNewsletter = '';
    },

    makeProgress() {
      if(this.progress < 100) {
        this.progress += 5;
      }
    },
  }

});
