Package.describe({
  name: "cunneen:delete-link",
  version: "1.0.0",
  summary: "Provides a delete anchor element (link) UI component",
  git: "https://github.com/cunneen/meteor-delete-link.git"
});

Package.on_use(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
    api.use(['templating', 'mongo-livedata']);
  } else {
    api.use(['templating', 'mongo-livedata']);
  }
  
  api.add_files(['delete-button.html', 'delete-button.js'], 'client');
});
