var SearchView = Backbone.View.extend({


  events: {
    'click button': 'findTarget',
    'keyup': 'keyAction',
  },

  findTarget: function() {
    var query = $('.form-control').val();
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  keyAction: function(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      var query = $('.form-control').val();
      this.collection.search(query);
    }
  },

  template: templateURL('src/templates/search.html')

});
