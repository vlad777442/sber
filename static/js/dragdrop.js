import {  dragdrop } from './imagehelper.js'

$(function () {
  dragdrop();

  function preparedata (file) {
    let fd = new FormData();

    fd.append('file', file);
    uploadData(fd);
  }

  // Drop
  $('.upload-area').on('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#howto").text("We are uploading your file.");
    let file = e.originalEvent.dataTransfer.files;
    let dropped = file[0];

    preparedata(dropped);
  });


  $("#uploadfile").click(function () {
    $("#file").click();
  });

  // file selected
  $("#file").change(function () {
    let imageType = /image.*/;
    let file = $('#file')[0].files[0];
    $("#howto").text("Uploading your file.");

    preparedata(file);
  });
});

function uploadData (formdata) {

  $.ajax({
    url: '/upload/new/',
    type: 'post',
    data: formdata,
    contentType: false,
    processData: false,
    success: function (data) {
      updatetags(data);
    }
  });
}

function updatetags (data) {
  $("#howto").html("Drag and Drop file here<br />Or<br />Click to Upload")
}