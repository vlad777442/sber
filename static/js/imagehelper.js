function dragdrop () {
  $("html").on("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#howto").text("Drag here");
  });

  $("html").on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $('.upload-area').on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#howto").text("Drop");
  });

  $('.upload-area').on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#howto").text("Drop");
  });
}

export {  dragdrop }