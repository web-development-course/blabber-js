function createBlab(blabData) {
  var newBlab = $(`
    <div id="${blabData.id}" class="blab-container">
      <div class="blab-image">
        <img src="https://email2pic.herokuapp.com/gravatar/${blabData.email}">
      </div>
      <div class="blab-body">
        <div class="blab-email">${blabData.email}</div>
        <div class="blab-content">${blabData.content}</div>
        <div class="blab-actions">
          <a href="#" class="delete-blab" onclick="deleteBlab('${blabData.id}')">delete</a>
          <span> · </span>
          <a href="#" class="upvote-blab" onclick="upvoteBlab('${blabData.id}')">upvote (<span class="blab-upvotes">${blabData.upvotes}</span>)</a>
          <span> · </span>
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURI(document.location.host)}%2Fblabs%2F${blabData.id}&t=${blabData.content}">share</a>
          <span> · </span>
          <a>${blabData.createdAt.toLocaleString()}</a>
        </div>
      </div>
    </div>
  `);  
  $('#blabs-container').prepend(newBlab);
}

function deleteBlab(blabId) {
  $('#' + blabId).remove();
}

function upvoteBlab(blabId) {
  var upvotes = $('#' + blabId).find('.blab-upvotes');
  upvotes.html(parseInt(upvotes.html()) + 1);
}

$(document).ready(function () {

  $('#create-blab').submit(function (e) {
    e.preventDefault();
    var data = {
      id: `blab_${Math.floor(Math.random() * 1000000)}`,
      email: $(this.email).val(),
      content: $(this.content).val(),
      upvotes: 1,
      createdAt: new Date(),
    };
    createBlab(data);
  });
});
