//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("dcstorm.stormiqconfirmationpagetagwithcustommetrics.Tag", {
    config: {
      /*DATA*/
	name: "StormIQ Confirmation Page Tag with custom metrics",
	async: true,
	description: "To be placed on the confirmation page only. Provides space for 3 custom metrics.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/dc_storm.png",
	locationDetail: "",
	priv: false,
	url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "StormIQ ID",
		description: "The ID assigned to you by DC Storm",
		token: "storm_id",
		uv: ""
	},
	{
		name: "StormIQ Channel",
		description: "Leave blank if not provided",
		token: "channel",
		uv: ""
	},
	{
		name: "Transaction Currency",
		description: "The currency with which the user paid for the order",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		name: "Order ID",
		description: "The completed transaction's ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Product IDs",
		description: "The list of all product IDs purchased in this order",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Product SKUs",
		description: "List of SKUs for each product in the order",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		name: "Product Quantities",
		description: "List of quantities corresponding to each item in the order",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Product Colors",
		description: "List of colors for each item in the order",
		token: "colors",
		uv: "universal_variable.transaction.line_items[#].product.color"
	},
	{
		name: "Product Values",
		description: "List of values paid by the customer for each item in the order",
		token: "vals",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		name: "Shipping Cost",
		description: "The amount paid by the customer for shipping this order",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		name: "Custom Metric 1",
		description: "Arbitrary metric. It does NOT end with ';' - you may use empty quotes if this is unneeded.",
		token: "custom_1",
		uv: ""
	},
	{
		name: "Custom Metric 2",
		description: "Arbitrary metric. It does NOT end with ';' - you may use empty quotes if this is unneeded.",
		token: "custom_2",
		uv: ""
	},
	{
		name: "Custom Metric 3",
		description: "Arbitrary metric. It does NOT end with ';' - you may use empty quotes if this is unneeded.",
		token: "custom_3",
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
window.__stormJs ='t1.stormiq.com/dcv4/jslib/' + this.getValueForToken("storm_id") + '.js'; 
window.__ch ='' + this.getValueForToken("channel") + '';
      /*~PRE*/
    },
    post: function () {
      /*POST*/
var i = 0, ii = this.getValueForToken("ids").length;

for (; i < ii; i++) {
  saleTrack.addSaleItem({
    itemcount: this.getValueForToken("quants")[i],
    itemvalue: this.getValueForToken("vals")[i],
    m1: this.getValueForToken("ids")[i],
    m2: this.getValueForToken("skus")[i],
    m3: this.getValueForToken("colors")[i],
    m4: this.getValueForToken("custom_1")[i],
    m5: this.getValueForToken("custom_2")[i],
    m6: this.getValueForToken("custom_3")[i]
  })
}

saleTrack.addSaleItem({
    itemcount: 1,
    itemvalue: this.getValueForToken("shipping"),
    m1: "Shipping cost"
})

saleTrack.curcode = '' + this.getValueForToken("currency") + '';
saleTrack.orderid = "" + this.getValueForToken("order_id") + ""; 
saleTrack.logSale(1);
      /*~POST*/
    }
});