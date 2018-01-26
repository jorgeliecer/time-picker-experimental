$.fn.rotate = function(degrees) {
  return $(this).css({
    '-webkit-transform' : 'rotatez(' + degrees + 'deg)', 
    '-moz-transform' : 'rotatez(' + degrees + 'deg)', 
    '-ms-transform' : 'rotatez(' + degrees + 'deg)', 
    'transform' : 'rotatez(' + degrees + 'deg)'
  })
}

Zepto(function($) {
  var container = $("div.timepicker-container")
  var hour_numbers = container.find("div.hour > a.num"), vector = container.find(".vector").first()
  var spacing = 2 * Math.PI / hour_numbers.size(), radius = $(".timepicker-container").width() * 0.7 / 2
  var offset_x = container.width() / 2, offset_y = container.height() / 2
  vector.width(radius * 0.7)
  hour_numbers.each(function(index) {
    var degree = spacing * index, x = radius * Math.cos(degree), y = radius * Math.sin(degree)
    $(this).css({
      top: offset_y - $(this).height() / 2 + y,
      left: offset_x - $(this).width() / 2 + x
    }).attr("data-degree", degree * 180 / Math.PI)
  }).mouseenter(function() {
    var degrees = $(this).attr("data-degree")
    vector.rotate(degrees).show()
  }).mouseleave(function() {
    vector.hide()
  }).click(function() {
  })
})
