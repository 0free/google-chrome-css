
document.getElementById("save").addEventListener("click",saveOptions);
document.getElementById("update").addEventListener("click",update);

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
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/manifest.xml",
  });

  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/update.xml",
  });

  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/options.css",
  });
  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/options.html",
  });
  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/options.js",
  });

  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/outlook.css",
  });

  chrome.downloads.download({
      url: "https://raw.githubusercontent.com/0free/google-chrome-css/1/youtube.css",
  });

}
