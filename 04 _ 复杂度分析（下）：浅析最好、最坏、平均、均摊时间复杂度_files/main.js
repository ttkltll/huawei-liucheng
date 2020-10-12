(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('https://static001.geekbang.org/static/js/manifest.57ffda2dd976a455e0ff.js', function () {
    loadJS('https://static001.geekbang.org/static/js/vendor.1c6c6c8ab6479303f2b9.js', function () {
      loadJS('https://static001.geekbang.org/static/js/app.172aea6eb4884351e4a1.js')
    })
  })
})()

