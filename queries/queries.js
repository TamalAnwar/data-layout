// a. Retrieve latest 10 feed items

// Getting 10 feed item for a given user

var user = 'abcxyz';

db.Feed.find({ 'owner.ownerId': user })
  .sort({ created: -1 })
  .limit(10);

// b. Paginate a e.g. 2nd latest 10 items, 3rd latest 10 items.

db.Feed.find({ 'owner.ownerId': user })
  .sort({ created: -1 })
  .skip(1 * 10)
  .limit(10);

db.Feed.find({ 'owner.ownerId': user })
  .sort({ created: -1 })
  .skip(2 * 10)
  .limit(10);

// c. Retrieve first 10 posts of a timeline

// Every post has an info of who owns the post, the id etc, which we can use to filter the date

db.Post.find({ 'owner.ownerId': timelineId }).limit(10);

// d. Retrieve last 10 items in a reply thread of a post

db.Reply.find()
  .sort({ created: -1 })
  .limit(10);

// e. Retrieve last 10 comments in a reply thread of a post

db.Reply.find()
  .sort({ created: -1 })
  .limit(10);

// f. Retrieve all timelines in Organization: Twisker Group: Design where Tom is a
// collaborator (contributor, commenter or viewer)

// Needs some logic to be implemented.
// We can set number for roles like 0, 1, 2, 3 and filter the data by these values

db.Timeline.find({ 'owner.ownerId': twiskerId });
