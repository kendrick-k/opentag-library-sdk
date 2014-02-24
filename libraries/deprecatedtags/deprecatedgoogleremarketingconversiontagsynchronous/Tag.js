//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("deprecatedtags.deprecatedgoogleremarketingconversiontagsynchronous.Tag", {
    config: {
      /*DATA*/
	name: "[Deprecated] Google Remarketing Conversion Tag - Synchronous",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: false,
	url: "www.googleadservices.com/pagead/conversion.js",
	usesDocWrite: true,
	parameters: [
	{
		name: "Conversion ID",
		description: "Google Conversion ID provided in the script",
		token: "conversion_id",
		uv: ""
	},
	{
		name: "Conversion Language",
		description: "Google Conversion Language provided in the script without quotes. e.g. en",
		token: "conversion_language",
		uv: ""
	},
	{
		name: "Conversion Color",
		description: "Google Conversion Color provided in the script without quotes, e.g. 666666",
		token: "conversion_color",
		uv: ""
	},
	{
		name: "Conversion Label",
		description: "Google Conversion Label provided in the script, it's usually a long text. e.g. CBAtWAvEaWOA43HV9PA",
		token: "conversion_label",
		uv: ""
	},
	{
		name: "Conversion Format",
		description: "A conversion format provided in the script without quotes, e.g. 3",
		token: "conversion_format",
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
var google_conversion_id = this.getValueForToken("conversion_id");
var google_conversion_language = "" + this.getValueForToken("conversion_language") + "";
var google_conversion_color = "" + this.getValueForToken("conversion_color") + "";
var google_conversion_label = "" + this.getValueForToken("conversion_label") + "";
var google_conversion_format = "" + this.getValueForToken("conversion_format") + "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});