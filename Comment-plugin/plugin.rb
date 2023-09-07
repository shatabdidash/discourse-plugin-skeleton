# name: auto-comment
# about: say congrats
# version: 0.1
# authors: YourName
# url: https://github.com/shatabdidash/discourse-plugin-skeleton/tree/main/comment-plugin

after_initialize do
    # Register the JavaScript asset
    register_asset('assets/javascripts/comment.js', :client)
  end
  
