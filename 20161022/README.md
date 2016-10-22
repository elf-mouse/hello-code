## HTML语义化

- `ul`
- `ol`
- `dl`

## CSS复用

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

## jQuery - AJAX

```html
<ul id="list">
  <li class="no-data">No Data</li>
</ul>
<button type="button" id="test">Ajax Request</button>
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="main.js"></script>
```

```js
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
    renderItems(response);
  });
});
```
