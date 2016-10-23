## HTML语义化

- `ul`
- `ol`
- `dl`

## CSS复用性

```html
<button type="button" class="btn">Button</button>
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-bigger">Big Button</button>
```

```css
.btn {
  width: 100px;
  height: 40px;
  color: black;
  border: 1px solid;
  border-radius: 5px;
  background: none;
}

.btn-primary {
  color: white;
  border: 0;
  background: #3875ff;
}

.btn-bigger {
  font-size: 16px;
  width: 150px;
  height: 50px;
}
```

## jQuery.ajax

```html
<ul id="list">
  <li class="no-data">No Data</li>
</ul>
<button type="button" id="btn-test">Ajax Request</button>
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="main.js"></script>
```

```js
$(function() {
  var url = '/api/getItems';

  function renderItems(data) {
    var output = '';

    // 1. for循环
    // for (var i = 0, len = data.length; i < len; i++) {
    //   output += '<li data-id="' + data[i].id + '">' + data[i].name + '</li>';
    // }

    // 2. forEach循环
    data.forEach(function(item) {
      output += '<li data-id="' + item.id + '">' + item.name + '</li>';
    });

    $('#list').html(output);
  }

  $('#btn-test').on('click', function() {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    }).done(function(response) {
      if (response.code == 200) {
        renderItems(response.data);
      } else {
        alert(response.message);
      }
    });
  });
});
```

### Demo使用步骤

__服务端__

1. `cd demo`
2. `npm install`
3. `node server/index.js`

__客户端__

1. `cd demo`
2. `http-server client`
3. 浏览器访问 http://127.0.0.1:8080
