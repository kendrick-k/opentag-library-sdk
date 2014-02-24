//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticsecommercecustomdomainsonlyrequiredparameters.Tag", {
    config: {
      /*DATA*/
	name: "Google Analytics Ecommerce - Custom Domains, only required parameters",
	async: true,
	description: "Ecommerce tracking with basic parameters, custom domains, and setAllowLinker set to true.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "GA Profile ID",
		description: "",
		token: "profile_id",
		uv: ""
	},
	{
		name: "GA Domain Name",
		description: "",
		token: "domain_name",
		uv: ""
	},
	{
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Item SKUs",
		description: "",
		token: "item_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		name: "Item Names",
		description: "",
		token: "item_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		name: "Item Unit Prices",
		description: "",
		token: "item_unit_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		name: "Item Quantities",
		description: "",
		token: "item_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("profile_id") + '']);
  _gaq.push(['_setDomainName', '' + this.getValueForToken("domain_name") + '']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  _gaq.push(['_addTrans',
    '' + this.getValueForToken("order_id") + '',
    '',
    '' + this.getValueForToken("order_total") + '',
    '',         
    '',
    '',
    '',
    ''
  ]);
  var i, ii;
  for (i = 0, ii = this.getValueForToken("item_skus").length; i < ii; i += 1) {
    _gaq.push(['_addItem',
      '' + this.getValueForToken("order_id") + '',
      this.getValueForToken("item_skus")[i],
      this.getValueForToken("item_names")[i],
      '',
      this.getValueForToken("item_unit_prices")[i],
      this.getValueForToken("item_quantities")[i]
    ]);
  }
  _gaq.push(['_trackTrans']); 

  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
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