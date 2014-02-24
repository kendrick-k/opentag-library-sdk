//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("fandist.digitalanimal.Tag", {
    config: {
      /*DATA*/
	name: "Digital Animal",
	async: true,
	description: "This will enable fandi.st to show you what impact your Campaigns are having on your site.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Fandi.st.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Fandi.st Client ID",
		description: "The ID relating the script to you",
		token: "client_id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

  (function () {
    var uv = window.universal_variable || {};
    var src = "//a.fandi.st/pixel.gif?acc=" + this.getValueForToken("client_id") + "&camp=1&d=" + window.encodeURIComponent(JSON.stringify(uv));
    var fandImage= new Image();
    fandImage.src = src;
  })();


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