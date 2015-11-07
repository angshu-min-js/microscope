Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!commentAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');

    comment = _.extend(_.pick(commentAttributes, 'body'), {
      //userId: user._id,
      //author: user.username,
      submitted: new Date().getTime()
    });

    return Comments.insert(comment);
  }
});
