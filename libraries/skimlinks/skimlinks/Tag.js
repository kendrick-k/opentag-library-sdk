//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("skimlinks.skimlinks.Tag", {
    config: {
      /*DATA*/
	name: "Skimlinks",
	async: true,
	description: "Converts any normal product or merchant link in your content into its equivalent affiliate link as a user clicks on it.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Skimlinks.png",
	locationDetail: "",
	priv: false,
	url: "s.skimresources.com/js/${publisher_id}.skimlinks.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "Publisher ID",
		description: "A publisher ID provided by Skimlinks. The format should be 0000X1111",
		token: "publisher_id",
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
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});