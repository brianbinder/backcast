var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();///this is rendered by videolist

    this.render();

    this.listenTo(this.videos, 'sync', this.firstSelect);
    this.videos.search();
  },


  firstSelect: function () {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({collection: this.videos,
      el: this.$('.list')
    }).render();

    new SearchView({el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
