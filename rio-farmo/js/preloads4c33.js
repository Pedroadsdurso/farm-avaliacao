
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.pt-BR.f623661058342cce85c1.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/9244.baseline.pt-BR.d15385abcc7742aa0692.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/8572.baseline.pt-BR.d0672dc20af6e91261e4.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/6134.baseline.pt-BR.1bc59c356c867cc155a0.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.aac62b9e04a2dc040ccd.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/9315.baseline.pt-BR.2d4becc4565e87d9a9a1.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/4979.baseline.pt-BR.720adecded72af31bd80.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/5669.baseline.pt-BR.604aeedc84b0b02109fd.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/4653.baseline.pt-BR.acbb9ed21a16067cc649.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/2990.baseline.pt-BR.271e950143f4c7f0e192.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/8546.baseline.pt-BR.d55ed77d3dbffe28b3b2.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/8610.baseline.pt-BR.c6a41ca1cdefe6d6790d.js","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/6589.baseline.pt-BR.b7437f45fdcad2a6cff9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.pt-BR.04af7d21d657cc9b8f37.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9244.baseline.pt-BR.ff23de3c3cda9b61d2d9.css","../../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.9e3b4b7160d4c8b8f05b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.pt-BR.e1590efe384d128dd06f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET.html', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  