//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("peerius.homepage.Tag", {
    config: {
      /*DATA*/
	name: "Home Page",
	async: true,
	description: "Peerius tag for the home page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		name: "Peerius Language",
		description: "Language of the page that the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		name: "Peerius User Name",
		description: "The name of the user of the home page",
		token: "user_name",
		uv: "universal_variable.user.name"
	},
	{
		name: "Peerius User Email",
		description: "Email of the user on the home page",
		token: "user_email",
		uv: "universal_variable.user.email"
	},
	{
		name: "Peerius Channel",
		description: "Channel on the home page",
		token: "channel",
		uv: ""
	},
	{
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "home",
    lang: "" + this.getValueForToken("lang") + "",
    channel: "" + this.getValueForToken("channel") + "",
    user: {
      name: "" + this.getValueForToken("user_name") + "",
      email: "" + this.getValueForToken("user_email") + ""
    }
  }
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});