//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mediamind.genericpagetag.Tag", {
    config: {
      /*DATA*/
	name: "Generic Page Tag",
	async: true,
	description: "Tag to be placed on any unique page with an activity ID associated",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "MediaMind Page Activity ID",
		description: "The ID unique to the page the tag is running on",
		token: "activity_id",
		uv: ""
	},
	{
		name: "Session ID",
		description: "An ID unique to each user's session - can be set blank",
		token: "session_id",
		uv: "universal_variable.user.user_id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var ebRand = Math.random() * 1000000;
var ebSession = "" + this.getValueForToken("session_id") + "";

(function() {
  
  var script = document.createElement("script");
  script.src = "//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&ActivityID=" + this.getValueForToken("activity_id") + "&rnd=" + ebRand + "&Session=" + ebSession;
  document.getElementsByTagName("head")[0].appendChild(script);

})()



      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});