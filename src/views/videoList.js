var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    var renderedVids = this.collection.map(function(clips) {
      return new VideoListEntryView({model: clips }).render().el;
    });
    this.$('.video-list').append(renderedVids);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
