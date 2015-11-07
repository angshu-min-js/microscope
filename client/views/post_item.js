Template.postItem.helpers({
	domain: function() {
	var a = document.createElement('a');
	a.href = this.url;
	return a.hostname;
	//return this.url;
},
commentsCount: function() {
 return Comments.find({postId: this._id}).count();
}
});
