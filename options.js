
document.getElementById('save').addEventListener('click',saveOptions);
document.getElementById('update').addEventListener('click',update);

document.addEventListener('DOMContentLoaded',restoreOptions);

function saveOptions() {
  var option = document.getElementById('option').value
  var likesColor = document.getElementById('like').checked
  chrome.storage.sync.set({
    favoriteColor: option,
    likesColor: likesColor
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'saved';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
    chrome.storage.sync.get({
      favoriteColor: 'red',
      likesColor: true
    }, function(items) {
      document.getElementById('option').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    });
}

function update() {
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/manifest.xml',
      filename: 'manifest.xml',
      conflictAction: 'overwrite',
      saveAs: false,
  });
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/options.css',
      filename: 'options.css',
      conflictAction: 'overwrite',
      saveAs: false,
  });
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/options.html',
      filename: 'options.html',
      conflictAction: 'overwrite',
      saveAs: false,
  });
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/options.js',
      filename: 'options.js',
      conflictAction: 'overwrite',
      saveAs: false,
  });
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/outlook.css',
      filename: 'outlook.css',
      conflictAction: 'overwrite',
      saveAs: false,
  });
  chrome.downloads.download({
      url: 'https://raw.githubusercontent.com/0free/google-chrome-css/1/youtube.css',
      filename: 'youtube.css',
      conflictAction: 'overwrite',
      saveAs: false,
  });
}
