function createPost() {
	// Blog values
	var postTitle = document.getElementById("title").value;
	var postBody = document.getElementById("body").value;
	var postAuthor = document.getElementById("author").value;

	// Templates
	var postTemplate = _.template(document.getElementById("post-template").innerHTML);
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

	var postSection = document.getElementById("post");
	postSection.innerHTML = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor});

	document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
	document.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();
}

function postComment() {
	var commenter = document.getElementById("commenter").value;
	var comment = document.getElementById("comment").value

	var commentTemplate - _.template(document.getElementById("comment-template").innerHTML);

	var commentsDiv = document.getElementById("comments");
	commentsDiv.innerHTML += commentTemplate({'commenter': commenter, 'comment': comment});
}